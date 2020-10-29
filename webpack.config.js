const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'tapsiComponents',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ]
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        }
    },
    externals: [
        // Don't bundle
        {
            react: {
                commonjs: "react",
                commonjs2: "react",
                amd: "React",
                root: "React"
            },
            "react-dom": {
                commonjs: "react-dom",
                commonjs2: "react-dom",
                amd: "ReactDOM",
                root: "ReactDOM"
            },
            classnames: 'classnames',
            'moment-jalaali': 'moment-jalaali',
            'moment-range': 'moment-range',
            'rc-trigger': 'rc-trigger',
            'react-jsonschema-form': 'react-jsonschema-form',
            'react-onclickoutside': 'react-onclickoutside',
            'react-tether': 'react-tether',
        },
        function({ request }, callback) {
            if (/^@material-ui\//.test(request)){
                return callback(null, request);
            }
            callback();
        },
    ],
};
