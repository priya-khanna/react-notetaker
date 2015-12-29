// This is the root component which will render all its children components. We are pointing webpack to that root component so that it knows where to starts processign all of the JSX. After compiling all the code from main.js and its children components, output it in bundle.js
module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
