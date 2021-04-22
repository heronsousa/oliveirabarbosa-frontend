module.exports = {
    rules: [
      {
        test: /\.svg$/,
        loader: 'url-loader'
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader'
      }
    ]
};
