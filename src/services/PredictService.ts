import * as tf from "@tensorflow/tfjs-node-gpu";

export interface IImageFile {
    data: Buffer;
    mimetype: string;
  }

class PredictService{
    async predict(image: IImageFile){
        const model = await tf.loadLayersModel("file://my_model/model.json");
        const img = tf.node.decodeImage(image.data).resizeBilinear([224, 224]);
        const batchedImg = img.expandDims();
        const prediction = (model.predict(batchedImg) as tf.Tensor).print();
        return prediction;
    }
}

export default new PredictService();