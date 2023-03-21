import * as tf from "@tensorflow/tfjs-node-gpu";
import fse from "fs-extra";
import path from "path";
import preprocessImage from "./preprocessImage";
const TRAIN_IMAGES_DIR = "../../animals";

function* createDataset(dirPath: string = TRAIN_IMAGES_DIR) {
    let dataDir = path.join(__dirname, dirPath);
    // const images = [];
    // const labels: number[] = [];

    let folder = fse.readdirSync(dataDir);
    for (let i = 0; i < folder.length; i++) {
        // labels.push(i);
        let file = fse.readdirSync(path.join(dataDir, folder[i]));
        for (let j = 0; j < file.length; j++) {
            if (!file[j].toLocaleLowerCase().endsWith(".jpg")) {
                continue;
            }
            var filePath = path.join(dataDir, folder[i] + "/" + file[j]);
            var imagesDataset = preprocessImage(filePath);
            // images.push(imagesDataset);

            yield { xs: imagesDataset, ys: tf.tensor1d([i]) };
        }
    }


}

export default createDataset;
