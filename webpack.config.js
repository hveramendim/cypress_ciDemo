const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.feature'],
    fallback: {
      path: require.resolve('path-browserify'),
      process: require.resolve('process/browser'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.feature$/, // Procesa archivos .feature
        use: [
          {
            loader: '@badeball/cypress-cucumber-preprocessor/webpack',
          },
        ],
      },
      {
        test: /\.js$/, // Procesa archivos .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
