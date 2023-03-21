import * as tf from "@tensorflow/tfjs-node-gpu";

function createModel() {
    const model = tf.sequential();

    model.add(
        tf.layers.conv2d({
            inputShape: [224, 224, 3],
            kernelSize: 3,
            filters: 16,
            activation: "relu",
        })
    );

    model.add(tf.layers.maxPooling2d({ poolSize: [2, 2], strides: [2, 2] }));

    model.add(
        tf.layers.conv2d({
            kernelSize: 3,
            filters: 32,
            activation: "relu",
        })
    );

    model.add(tf.layers.maxPooling2d({ poolSize: [2, 2], strides: [2, 2] }));

    model.add(tf.layers.flatten());

    model.add(tf.layers.dense({ units: 10, activation: "softmax" }));
    
    return model;
}

export default createModel;
