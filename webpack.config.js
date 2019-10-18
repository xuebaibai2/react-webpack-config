const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Loaders = require('./loaders');

const devEnv = 'development';
const prodEnv = 'production';

module.exports = [(env) => {
    const isDevelopment = env === devEnv;
    console.info(`Building in ${isDevelopment ? devEnv : prodEnv} mode...`);

    const baseConfig = {
        name: 'react-build',
        entry: './src/app.js',
        module: {
            rules: [{
                test: /\.html$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'html-loader'
                }]
            }]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: './index.html'
            })
        ]
    };

    return isDevelopment ? 
        merge(baseConfig, {
                mode: devEnv,
                devtool: 'source-map',
                output: {
                    path: path.resolve(__dirname, 'debug'),
                    filename: 'app.bundle.js',
                    publicPath: '/debug/'
                },
                devServer: {
                    contentBase: path.resolve(__dirname, 'debug'),
                    publicPath: '/',
                    watchContentBase: false,
                    hotOnly: true,
                    overlay: true,
                    port: 3000
                },
                plugins: [
                    new webpack.NamedModulesPlugin(),
                    new webpack.HotModuleReplacementPlugin()
                ]
            },
            Loaders.BabelLoaderDev,
            Loaders.SassLoaderDev) :
        merge(baseConfig, {
                mode: prodEnv,
                devtool: 'none',
                output: {
                    path: path.resolve(__dirname, 'dist'),
                    filename: '[name].[hash].js',
                    publicPath: '/dist/'
                }
            },
            Loaders.BabelLoader,
            Loaders.SassLoader);
}];