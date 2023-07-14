const path = require("path");

module.exports = {
  mode: "development", // Set the mode to 'development' or 'production'
  entry: "./src/app.ts", // Entry point of your application
  target: "node", // Set the target environment to Node.js
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for the bundled code
    filename: "bundle.js", // Name of the bundled output file
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
