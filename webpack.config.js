const MiniCssExtractPlugin = require('mini-css-extract-plugin');
<<<<<<< HEAD
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;
=======
const webpack = require('webpack');


const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'stylus-loader'];
const cssProd = new MiniCssExtractPlugin({    
                    fallback: 'style-loader',
                    use: ['css-loader', 'stylus-loader']
                })
const cssConfig = isProd ? cssProd : cssDev;

>>>>>>> 67b5ba5fb0a5916cf3a9a7cb259bf444a4be62e8

module.exports = {
mode: process.env.NODE_ENV || 'development',
  entry: [
    `${__dirname}/src/index.js`,
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist/public`,
    publicPath: '/assets/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],

    module: {
        rules: [
            // {
            //     test: /\.styl$/,
            //     use:  ['style-loader', 'css-loader', 'stylus-loader']
            // },
            {
                test: /\.styl$/,
                use:[
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      reloadAll: true,
                      sourceMap: isDevelopment,
                      hmr: isDevelopment,
                    },
                  },
                  { loader: 'css-loader', options: { sourceMap: isDevelopment } },
    { loader: 'stylus-loader', options: { sourceMap: isDevelopment } },
                ],
              },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `fonts/[name].[ext]`
}  
                    }
                ]
            }
        ]
    },
};