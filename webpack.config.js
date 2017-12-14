const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'stylus-loader'];
const cssProd =  ExtractTextPlugin.extract({    
                    fallback: 'style-loader',
                    use: ['css-loader', 'stylus-loader']
                })
const cssConfig = isProd ? cssProd : cssDev;


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
                            name: './fonts/[name].[ext]'
}  
                    }
                ]
            }
        ]
    },

    devtool: isProd ?  false : 'cheap-inline-module-source-map',


    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: !isProd
        }),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            minify: {
                collapseWhitespace: true,
            },
            template: './public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};