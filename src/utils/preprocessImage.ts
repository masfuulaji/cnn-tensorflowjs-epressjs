import * as tf from "@tensorflow/tfjs-node-gpu";
import fse from "fs-extra";

// const imageSize = 224;

function preprocessImage(imagePath: string) {
    const buffer = fse.readFileSync(imagePath);
    const tfimage = tf.node.decodeImage(buffer);
    const resized = tf.image.resizeNearestNeighbor(tfimage, [224, 224]).toFloat().div(tf.scalar(255));
    return resized;
}

export default preprocessImage;
