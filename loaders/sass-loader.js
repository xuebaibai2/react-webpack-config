const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.(s[ac]ss)$/,
            exclude: /node_modules/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: false,
                        reloadAll: true
                    }
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'postcss-loader' // load config from postcss.config.js
                },
                {
                    loader: 'sass-loader'
                },
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[name].[hash].css'
        })
    ]
}