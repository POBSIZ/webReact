const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            { // BABEL LOADER
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            { // CSS LOADER
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            // {// CSS LOADER
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: 'style-loader'
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1,
            //                 modules: {
            //                     // localIdentName: 'camelCase',
            //                     localIdentName: '[name]__[local]___[hash:base64:5]',
            //                     // localsConvention: 'camelCase',
            //                 }
            //             }
            //         }
            //     ]
            // },
            { // URL LOADER
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                  name: '[hash].[ext]',
                  limit: 10000,
                },
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({ filename: 'app.css' }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
};