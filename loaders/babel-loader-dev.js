module.exports = {
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        ['@babel/preset-env', {
                            debug: true,
                            targets: {
                                browsers: ['> 10%']
                            },
                            useBuiltIns: 'usage',
                            corejs: '2'
                        }],
                        ['@babel/preset-react']
                    ]
                }
            }, {
                loader: 'eslint-loader'
            }]
        }]
    }
}