# 介绍

## 环境

yarn add rollup rollup-plugin-babel @babel/core @babel/preset-env @babel/preset-react @emotion/babel-preset-css-prop -D

## rollup

### url

[JS打包工具rollup——完全入门指南](https://segmentfault.com/a/1190000010628352) // 仔细看

// script 直接运行
rollup ./src/index.js -o dist.js
> 注: -f amd 用来配置输出的格式  -o是输入的文件
// 通过配置文件运行
rollup -c

## jsx

[介绍全新的 JSX 转换](https://zh-hans.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
打包无法识别jsx语法,需要配置babel
根目录创建 babelrc 配置文件

## css

@emotion/core
stylecomponent