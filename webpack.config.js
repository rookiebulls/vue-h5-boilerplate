const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')

const __VERSION__ = require('./package.json').version

const commonConfigs = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      src: path.join(__dirname, 'src'),
      assets: path.join(__dirname, 'src', 'assets')
    }
  },
  externals: {
    wx: 'wx'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jpg|gif|svg|png|ttf|woff$/,
        loader: 'file-loader?limit=1024&name=images/[hash:8].[name].[ext]'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Welcome',
      inject: 'body',
      template: 'public/index.html',
      filename: 'index.html',
      favicon: 'public/favicon.ico',
      environment: {
        pro: process.env.DEPLOY_SERVER === 'pro'
      }
    }),
    new webpack.DefinePlugin({
      __DEPLOY_SERVER__: JSON.stringify(process.env.DEPLOY_SERVER || 'pro'),
      __VERSION__: JSON.stringify(__VERSION__)
    })
  ]
}

const devConfigs = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.v2ex.com',
        changeOrigin: true,
        secure: true
      }
    },
    disableHostCheck: true,
    compress: true,
    open: true,
    hot: true,
    overlay: true // 浏览器上也可以看到编译错误信息
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      files: ['src/**/*.{vue,css,scss}']
    })
  ]
}

const proConfigs = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new SentryWebpackPlugin({
      include: path.join(__dirname, 'dist', 'js'),
      release: 'release-v' + __VERSION__,
      urlPrefix: '~/js',
      ignore: ['node_modules']
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        lib: {
          name: 'lib',
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        parallel: 4,
        terserOptions: {
          warnings: false,
          compress: {
            drop_console: true
          }
        }
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  }
}

module.exports = env => {
  const conf = env.production
    ? merge(commonConfigs, proConfigs)
    : merge(commonConfigs, devConfigs)
  return conf
}
