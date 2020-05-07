const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'main.js',
    },
    devServer: {
        contentBase: './dist',
        publicPath: '/',
        port: 8080,
        writeToDisk: true,
        historyApiFallback: {
            index: './html/index.html'
        },
        stats: 'none'
    },
    entry: ['babel-polyfill', './main.ts'],
    plugins: [
            // new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: '[name].[contentHash].css',
        }),
            // new HtmlWebpackPlugin({
            //     title: 'Development',
            //     template: './html/index.html',
            //     inject: 'body'
            // })
    ]
    ,
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ]
    }
};