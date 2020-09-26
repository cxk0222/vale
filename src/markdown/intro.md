## 介绍

Vale UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。

这款组件库其实是我为了总结自己这几年的技术经验而写的，全程亲手编写，尽量不采用第三方库。
该官网本想使用 vuepress 等工具实现，但为了巩固一下自己 CSS 知识，也由自己亲自实现，并且支持响应式。

## 本项目的亮点

1. Vite 脚手架
2. Vue3 Composition API
3. Typescript
4. 项目结构清晰
5. Git commit 非常规范
6. 及时重构，代码复用率高

## 写完本项目的收获

1. 学会编写 vite 构建工具的插件
2. 学会编写 vue3 的插件 (和 vue2 相比只是语法微调)
3. 了解了一些 Vue3 与 Vue2 的差异
  - Vue3 去掉了实例 $on API，所以不能利用 Vue 来做 EventBus，得借用第三方库 Mitt
  - Vue3 directive 的生命周期有所变更，bind 改为 mounted，unbind 改为 unmounted
4. ...

## 本项目用到的第三方库

1. markdown: marked.js
2. markdown-style: github-markdown-css
3. code-highlight: prismjs

## 后续

因时间有限，写本项目的目的也只是为了熟悉 `Vue3` 的 Composition API 和 `Typescript` 语法，所以暂时只实现这么多组件，以后有时间也会增加更多的组件

下一节：[安装](#/doc/install)