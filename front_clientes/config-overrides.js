const webpack = require('webpack');
module.exports = function override(config, env) {
    config.resolve.fallback = {
        url: require.resolve('url/'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert/'),
    };
    

    return config;
};