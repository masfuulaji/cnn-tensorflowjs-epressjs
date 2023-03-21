import * as tf from "@tensorflow/tfjs-node-gpu";
import createModel from "../model/TfModel";
import createDataset from "../utils/createDataset";

class TrainingService {
    async trainModel() {
        const model = createModel();

        // Compile your model with an optimizer, loss function and metrics
        model.compile({
            optimizer: tf.train.adam(),
            loss: "categoricalCrossentropy",
            metrics: ["accuracy"],
        });

        // Train the model
        const epochs = 10;
        // let data = createDataset();
        let trainDataset = tf.data.generator(createDataset).batch(1);
        model.fitDataset(trainDataset, {
            epochs: epochs,
        });

        // Save the model
        const savePath = "my_model";
        await model.save(`file://${savePath}`);
    }
}

export default new TrainingService();