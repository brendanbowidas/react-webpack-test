module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  module: {
    loader: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  }
};
