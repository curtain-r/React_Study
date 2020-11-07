# admin
react-admin
// yarn的优点
并行安装，速度快
版本锁定
缓存机制（可断网安装）

## yarn的语法
yarn init               -->     npm init
yarn                    -->     npm install
yarn global add xxx     -->     npm install xxx -g
yarn add xxx --dev      -->     npm install xxx --save-dev
yarn remove xxx         -->     npm uninstall --save(-dev)
yarn run xxx            -->     npm run xxx

## 用`html-webpack-plugin`对HTML文件做处理

1. 安装插件
```yarn add html-webpack-plugin --dev```
2. 添加配置
安装完成后在`webpack.config.js`中添加插件就好
```
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    module.exports = {
        // entry, output等省略
        plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'        // 这里是传入自定以引入打包后js文件的HTML文件，不指定则是默认
        })
    ]
    }
    
```
## 处理`ES6`语法
1. 安装`loader`

```
yarn add babel-core babel-preset-env babel-loader --dev
```
2. 添加配置

```
module.exports = {
    // entry, output 省略
    module: {
        rules: [
            {
                test: /\.js$/,  // 需要处理的文件
                exclude: /(node_modules)/,  // 排除一些文件
                use: {
                    loader: 'babel-loader',
                    options: {
                        preset: ['env'],   // 'babel-preset-env'的缩写
                    }
                }
            }
        ]
    }
    // plugin省略
}
```

## 处理`React`语法
1. 安装`babel-preset-react`

```
yarn add babel-preset-react --dev
```
2. 添加配置，很简单只需要在上述`ES6`处理中的`preset`后面添加`react`就好

`preset: ['env']  --> preset: ['env','react']`

## 处理css
1. 安装loader

```
yarn add style-loader css-loader --dev
```

2. 添加配置

```
module.exports = {
    // entry, output 省略
    module: {
        rules: [
            // babel-loader省略
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']  // 注意处理从右向左
            }
        ]
    }
    // plugin省略
}
```


## 使用`extract-text-webpack-plugin`插件
1. 为什么要使用它
> 上述处理css的方法，打包完成后css文件被打包在了js文件中，它会在所有js执行完在执行css，如果js文件很多的话会有一段时间是没有样式的，所以我们需要将css文件单独打包到一个文件中
2. 安装插件

```
yarn add extract-text-webpack-plugin --dev
```
3. 修改配置（只需要修改即可）

```
    const ExtractTextPlugin = require('extract-text-webpack-plugin');

    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: "css-loader'
        })
    }

    // 在plugin中注册一下
    plugin: [
        new ExtractTextPlugin('style.css')      // 输出文件名
    ]
```
4. 打包完成后会在dist文件下生成style.css

## 处理scss
```
yarn add sass-loader --dev
```
和处理css样式一样，只需要修改fallback下面的use
`use: 'css-loader'  -->   use: ['css-loader', 'sass-loader']`

**注意有个坑，安装sass-loader后还必须安装node-sass,这个包安装起来很慢哦**

## 处理图片`file-loader`或者`url-loader`
> url-loader 功能与 file-loader 类似，但是对于文件大小低于指定限制时，可以放回一个 DataURL，不单独生产文件
**url-loader依赖与file-loader，也就是说两个都要安装**
1. 安装loader

```
yarn add file-loader url-loader --dev
```

2. 添加配置

```
module.exports = {
    // entry,output省略

        // css,sass配置省略
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192     // 小于 8k生成base64文件
                    }
                }
            ]
        }
    // plugin省略
}
```

## 字体配置
<a href='http://www.fontawesome.com.cn/'>Font Awesome中文网</a>

1. 安装font awesome
```
yarn add font-awesome
```

2. 引入
   在node_modules下找到font-awesome，选择自己想用的css/less/scss记住路径就好
```
// 在index.js中引入
import 'font-awesome/css/font-awesome.min.css';
```
**一般字体的引入写在样式引入的最前面**
3. 然后就可以在文件中使用了，具体怎么使用就要看你喜欢什么字体，然后通过文档进行具体引入
4. 对字体文件使用file-loader处理或者url-loader处理

```
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            }
```

<h3 style='color: red;'>一切都是那么的ok</h3>

## 实现自动刷新`webpack-dev-server`
1. 安装

```
yarn add webpack-dev-server --dev
```
2. 在`webpack.config.js`中配置
```
module.exports = {
    // 省略

    devServer: {
        contentBase: './dist'
    }
}
```

3. 如果发现样式很字体图标无法显示，可能是dist/index.html引入这些文件时，路经却一点，此时可以在webpack.config.js中的output下加入`publicPath: '/dist/'`,

## 代码提交
1. 拉取分支
2. git merge origin master,拉取最新代码
3. git add . 代码追踪
4. git commit -am "",提交到本地仓库
5. git push,推送到远程仓库
6. pull request, 管理员审核