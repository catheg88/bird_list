module.exports = {
  entry: './frontend/components/App.js',
  output: {
    path: __dirname,
    filename: './frontend/bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx' ]
  },
  node: {
    fs: 'empty'
  }
};
