const path = require('path');

module.exports = {
    stories: ['../app/**/*.stories.[tj]s', '../stories/**/*.stories.[tj]s'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links'],
    webpackFinal: async config => {
        config.node = {
            fs: 'empty',
            child_process: 'empty',
            pnpapi: 'empty'
        };
        config.module.rules.push({
            test: [/\.stories\.js$/, /index\.js$/],
            // loaders: [require.resolve('@storybook/source-loader')],
            include: [path.resolve(__dirname, '../')],
            enforce: 'pre',
        });
        return config;
    },
};
