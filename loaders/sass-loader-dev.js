module.exports = {
    module: {
        rules: [{
            test: /\.(s[ac]ss)$/,
            exclude: /node_modules/,
            use: [{
                    loader: 'style-loader',
                    options: {
                        injectType: 'styleTag'
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
    }
}