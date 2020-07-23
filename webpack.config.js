const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

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