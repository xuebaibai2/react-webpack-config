module.exports = {
    presets: [
        ['@babel/preset-env', {
            debug: false,
            targets: {
                browsers: ['> 1%']
            },
            useBuiltIns: 'usage',
            corejs: '3'
        }],
        ['@babel/preset-react']
    ]
};