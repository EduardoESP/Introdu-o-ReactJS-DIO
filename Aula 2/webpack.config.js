const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin') 
const path = require('path')

module.exports = {
    devtool: 'source.map',
 entry: {main: path.resolve(__dirname, './src/index.js'),},

 output:{
     path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js'
 },
    module:{
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]

    },

    resolve:{
        extensions: ['.js', '.jsx'],
    },
    
    plugins: [
        new HtmlWebpackPlugin(
            {
                title:'webpack Boilerplate',
                template: path.resolve(__dirname, './src/html/template.html'), //template file
                filename: 'index.html', //output file
            }
        ),
        new CleanWebpackPlugin(), 
    ],

}



