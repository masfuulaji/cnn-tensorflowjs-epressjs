import fse from "fs-extra";
import path from "path";
import preprocessImage from "./preprocessImage";
import * as tf from "@tensorflow/tfjs-node-gpu";

const TRAIN_IMAGES_DIR = "../../data_training/food";

const TXT_LABEL_PATH = "./src/assets/label.txt";

function* createDataset(dirPath: string = TRAIN_IMAGES_DIR) {
    fse.writeFile(TXT_LABEL_PATH, "");

    let dataDir = path.join(__dirname, dirPath);

    let folder = fse.readdirSync(dataDir);
    for (let i = 0; i < folder.length; i++) {
        fse.appendFile(TXT_LABEL_PATH, i.toString() + " : "+ folder[i] +"\r\n");
        
        let file = fse.readdirSync(path.join(dataDir, folder[i]));
        for (let j = 0; j < file.length; j++) {
            if (!file[j].toLocaleLowerCase().endsWith(".jpg")) {
                continue;
            }
            var filePath = path.join(dataDir, folder[i] + "/" + file[j]);
            var imagesDataset = preprocessImage(filePath);
            yield { xs: imagesDataset, ys: tf.tensor1d([i]) };
        }
    }
}

export default createDataset;
