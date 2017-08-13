const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')


module.exports = {
    entry: {
        app: './public/src/index.js'
    },

    output: {
        path: path.resolve(__dirname, './public/dist'),

        filename: '[name].bundle.js'
    },

    devServer: {
        contentBase: path.join(__dirname, './public/dist'),
        compress: true,
        stats: 'minimal',
        open: true,
        port: 3001
    },

    module: {
        rules: [
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({    
                    fallback: 'style-loader',
                    use: ['css-loader', 'stylus-loader'],
                    publicPath: 'style.css'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
            // {
            //     test: /\.svg$/,
            //     loader: 'svg-sprite-loader'
            // }
        ]
    },

    devtool: 'cheap-inline-module-source-map',

    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            minify: {
                collapseWhitespace: true,
            },
            template: './public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};