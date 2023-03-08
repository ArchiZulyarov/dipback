
module.exports = {

    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
   },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader", // 3. Inject styles into DOM
                    "css-loader", // 2. Turns css into commonjs
                    "sass-loader", // 1. Turns sass into css
                ]
            },
            {
                test: /\.(gif|svg|jpg|png|)$/,
                loader: "file-loader",
            }
            , {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]


    },
    resolve: {
        extensions: ['.js', '.jsx']
    },

};