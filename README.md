# px-to-rem-loader
 > webpack 对px单位的css属性自动转化为rem为单位的fis插件。基于rem的解决方案[rem-core](https://www.npmjs.com/package/rem-core)的二次开发。

-----------------
    - 使用node-css把css解析后,对px为单位对属性进行rem转换处理。
    - 对文字进行特殊处理追加至产出的css文件之后。
    - developer只用专注开发,配置灵活方便, 对原始文件无侵入。
-----------------

## flexible.js
默认可以配合淘宝的[flexible.js](https://github.com/amfe/lib-flexible)使用

## webpack配置

```javascript

// webpack.config.js
module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        { loader: 'style' },
        { loader: 'css' },
        {
          loader: 'px-to-rem-loader',
          options: {
            dpr: 2,
            rem: 750,
            exclude: ['background-size']
          }
        }
      ]
    }]
  }
}

```


## Usage

```css
body {
    border-top: 1px;
    border-bottom: 10px;
    padding: 10px; /* @norem */
    background-size: 10px 10px;
}
```

输出:

```css
body {
    border-top: 1px;
    border-bottom: 0.5557rem;
    padding: 10px;
    background-size: 0.5557rem 0.5557rem;
}
```
