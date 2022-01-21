const pathModule = require("path"); //absolute path
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'); //optimize images
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //extract css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //to minfy the extracted css

module.exports = {
    entry:"./src/index.js",
    output:{
        path:pathModule.resolve(__dirname,"dist"), //dynamic absolute path& resolve to concat or create from the beginning
        filename:"bundle.js" //for browser
        ,assetModuleFilename: 'images/[hash][ext][query]' //hashing or [name][ext]
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.css$/i, //css loader
                use:[MiniCssExtractPlugin.loader,"css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', //hash the name of image
            },
            { ///sass
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ], //rules array work in reverse
              },
        ]
    },
    plugins:[
        new HTMLWebpackPlugin(),
        new MiniCssExtractPlugin() //to extract css from bundle.js
        ,new CssMinimizerPlugin(),
    ],
    optimization:{
        minimize:true,
        minimizer:[
          
          "...",
          new ImageMinimizerPlugin({
            minimizerOptions: {
                // Lossless and lossy optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                  ["gifsicle", { interlaced: true }],
                  ["mozjpeg",{quality:70}],
                  ["optipng", { optimizationLevel: 5 }],
                  // Svgo configuration here https://github.com/svg/svgo#configuration
                 ['svgo']
                ],
            },
          }),
        ]
      }
}