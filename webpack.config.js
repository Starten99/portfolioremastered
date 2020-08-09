const path = require('path')
const HtmlPlugin  = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
    new HtmlPlugin({
        filename:'index.html',
        template:'./src/index.html'
    }),
    new CopyWebpackPlugin(
        {patterns:
            [
                {
                    from: './src/fonts',
                    to: './fonts'
                },
                {
                    from: './src/img',
                    to: './img'
                  }
            ]
        }
    ),
    new MiniCssExtractPlugin({
        filename: 'style.min.css',
    }),

    ],
    resolve: {
        alias: {
          images: path.resolve(__dirname, 'src/img/'),
        },
    },
    module:{
        rules: [
            {
              test: /\.scss$/i,
              use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: { 
                          config: {
                            path: require.resolve('./postcss.config.js')
                          }
                        }
                    },
                    'sass-loader',
                ],
            },
            { 
                test: /\.js$/,

                use:[
                    {
                        loader: "babel-loader",
                        options:{
                            presets: [
                                "@babel/preset-env"
                            ]
                        }
                    }
                ]
                
            },

            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]",
                        // outputPath: (file) => {
                        //     let path = file.split("src/")[1];  
                        //     let newPath = '../' + path;  
                        //     return newPath
                        // }
                    }
                }]
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: 'fonts/[name].[ext]',
                        // outputPath: (file) => {
                        //     let path = file.split("src/")[1];  
                        //     let newPath = '../' + path;  
                        //     return newPath
                        // }
                    }
                }]
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    } 
}