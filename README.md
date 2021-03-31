## vue-package-template

### 介绍
这是一个基于[vue-cli](https://cli.vuejs.org/zh/guide/)搭建的UI组件库基础开发模板。可以开发公共组件发布到[npm](https://www.npmjs.com/)上，供大家下载使用。

### 目录结构
```
 |-- packages              --------组件开发
 |-- examples              --------组件示例
 |-- lib                   --------组件打包后的目录
 |-- types                 --------不用做改动
```

### 如何使用

#### 下载

```bash
# 克隆代码
git clone https://github.com/solarcellsky/gw-front-components-lib.git
# npm安装依赖
npm i

--or--

# yarn安装依赖
yarnß
```
#### 修改项
1. 打开`package.json`，修改`name`属性（您的库名称）
2. 修改`build:lib`脚本，替换`package-name`字段，最好与库名称相似
```json
"build:lib": "npm run lint && vue-cli-service build --target lib --name packge-name dest lib packages/index.js"
```
3. 执行`npm run dev`开始开发
4. 开发完成后执行`npm run publish:npm`进行打包并发布（需要先登录npm）


### License

[MIT](http://opensource.org/licenses/MIT)
