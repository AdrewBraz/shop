const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'stylus-loader'];
const cssProd = new MiniCssExtractPlugin({    
                    fallback: 'style-loader',
                    use: ['css-loader', 'stylus-loader']
                })
const cssConfig = isProd ? cssProd : cssDev;


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

    module: {
        rules: [
            {
                test: /\.styl$/,
                use: cssConfig
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