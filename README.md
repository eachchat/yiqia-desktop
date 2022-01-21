亿洽桌面端
===============

亿洽桌面端是一个使用亿洽web的Matrix桌面客户端。

第一步
===========

```
yarn install
```

获取亿洽
================
这是Electron基于亿洽web的一个封装，它不包含任务亿洽web的代码。

如果你想运行本地的app并且不想打包，你要直接提供
`webapp` 目录:
```
# 事先拉取并且基于yiqia-web构建，然后把yiqia-web构建的webapp链接到yiqia-desktop.
ln -s ../yiqia-web/webapp ./
```



构建
========
现在你有一个拷贝的亿洽版本，开始准备打包。如果你喜欢运行本地的yiqia，遵循下面的步骤。

首先你要确保构建的本地模块在一个相同的目录。

如果你不需要这些特征，可以跳过下面的步骤。

打包本地安装包:
```
yarn run build:native
```

现在你可以打包:

```
yarn run build
```
运行后，构建的包将在 `dist/` 目录下.

开始
========
如果你喜欢为了开发在本地运行electron:
```
# 安装 electron 
# 使用 electron-builder 打包
yarn add electron
yarn start
```

在macOS上，你也能打包universal本地模块:
```
yarn run build:native:universal
```

...或者你可以打包一个指定的处理器:
```
yarn run build:native --target x86_64-apple-darwin
```
or
```
yarn run build:native --target aarch64-apple-darwin
```

你也可以创建一系列相同结构的包，运行n:

```
yarn run build:universal
```

如果你在windows系统上，你可以选择指定打包32还是64位的包:
```
yarn run build:32
```
or
```
yarn run build:64
```
