import * as tf from "@tensorflow/tfjs-node-gpu";

function createModel() {
    const model = tf.sequential({
        layers: [
          // Add a convolutional layer with 32 filters, a 3x3 kernel size, and ReLU activation
          tf.layers.conv2d({
            inputShape: [224, 224, 3],
            filters: 32,
            kernelSize: 3,
            activation: 'relu'
          }),
          // Add a max pooling layer with a pool size of 2x2
          tf.layers.maxPooling2d({
            poolSize: [2, 2]
          }),
          // Add a second convolutional layer with 64 filters, a 3x3 kernel size, and ReLU activation
          tf.layers.conv2d({
            filters: 64,
            kernelSize: 3,
            activation: 'relu'
          }),
          // Add a second max pooling layer with a pool size of 2x2
          tf.layers.maxPooling2d({
            poolSize: [2, 2]
          }),
          // Flatten the output of the second max pooling layer
          tf.layers.flatten(),
          // Add a fully connected layer with 128 units and ReLU activation
          tf.layers.dense({
            units: 128,
            activation: 'relu'
          }),
          // Add a final output layer with the number of classes and softmax activation
          tf.layers.dense({
            units: 3,
            activation: 'softmax'
          })
        ]
      });

    return model;
}

export default createModel;
