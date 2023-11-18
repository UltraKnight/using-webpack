const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  // useful for debugging, provides a map from dist files to source files,
  // so if an error occurs you'll se the right line that generated the error
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        // every .scss file will use these loaders (processed from right to left), each loader does something different
        // sass loader compile sass to css, css-loader converts the css into JS representation and style-loader injects it into the DOM
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      // use babel to make the code backwards compatible with older browsers
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    // generates an HTML file inside the dist folder when the app is mounted
    // the template.html is used to generate a template for that file
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      fileName: 'index.html',
      template: 'src/template.html',
    }),
    new BundleAnalyzerPlugin(),
  ]
}
