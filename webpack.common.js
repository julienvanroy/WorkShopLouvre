const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/app/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src/index.html'),
                to: path.resolve(__dirname, 'dist/index.html'),
            },
            {
                from: path.resolve(__dirname, 'src/app/assets/'),
                to: path.resolve(__dirname, 'dist/app/assets/'),
            },
        ]),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
            {
                test: /\.(woff2?|ttf|otf|eot|svg)$/,
                include: path.resolve(__dirname, 'src/app/assets/fonts'),
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.(jpg|jpeg|png)$/,
                include: path.resolve(__dirname, 'src/app/assets/img'),
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
}
