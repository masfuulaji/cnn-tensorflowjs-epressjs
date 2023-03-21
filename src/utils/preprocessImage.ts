import * as tf from "@tensorflow/tfjs-node-gpu";
import sharp from "sharp";
import fse from "fs-extra";

// const imageSize = 224;

function preprocessImage(imagePath: string) {
    const buffer = fse.readFileSync(imagePath);
    const tfimage = tf.node.decodeImage(buffer);
    const resized = tf.image.resizeBilinear(tfimage, [224, 224]);
    return resized;
}

export default preprocessImage;
