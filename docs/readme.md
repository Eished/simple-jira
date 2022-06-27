## Documents

### 项目技术栈

```
axios
flowbite
react 18
msw
typescript
tailwindcss 3
react-router 6
react-table
```

### 启动项目

使用 Json server：

- Windows: `Ctrl + shift + b` 点击 `start & server`

- MacOS: `Command + shift + b` 点击 `start & server`

使用 msw：

- `yarn start`

### 什么时候使用 flex 什么时候使用 grid

#### grid 和 fLex 各自的应用场景

1. 要考虑，是一维布局还是二维布局

   - 一般来说，一维布局用 fLeX，二维布局用 grid

2. 是从内容出发还是从布局出发？

   - 从内容出发：你先有一组内容（数量一般不固定），然后希望他们均匀的分
   - 布在容器中，由内容本身大小决定占据的空间
   - 从布局出发：先规划网格（数量一般比较固定），然后再把元素往里填充
   - 从内容出发，用 fLex\*从布局出发，用 grid

### 优化 svg 配置

`webpack.config.js`

```javascript
  {
    test: /\.svg$/,
    use: [
      {
        loader: require.resolve('@svgr/webpack'),
        options: {
          prettier: true,
          svgo: true,
          svgoConfig: {
            plugins: [
              {
                removeViewBox: true,
                removeAttrs: { attrs: 'fill' },
              },
            ],
          },
          titleProp: true,
          ref: true,
        },
      },
      {
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    ],
    issuer: {
      and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
    },
  }
```

### jira-dev-tool mock 后端的配置

`yarn add jira-dev-tool`

`npx msw init public`

`.env` 增加 `REACT_APP_API_URL=/api`

数据由代码生成，用户需要自己使用注册接口注册账号才能登录

接口：

- `ctrl P` 输入 `node_modules/jira-dev-tool/dist/index.js:29639` 回车，即可看到接口

  - 在里面搜索 `msw.rest.` 可以看到所有接口所需要的数据

- `userHandlers`
  - `/login`
  - `/register`
  - `/me`
- `getRestHandlers`
  - `/projects`
  - `/epics`
  - `/tasks`
  - `/kanbans`
  - `/persons`
  - `/taskTypes`
  - `/tags`
  - `/users`
- `reorderHandlers`
  - `/kanbans/reorder`
  - `/tasks/reorder`

更改 `src/api/index.tsx:10` 来选择 JsonServer 或者 msw（jira-dev-tool） 后端

https://www.npmjs.com/package/jira-dev-tool

https://github.com/mswjs/examples/tree/master/examples/rest-react

### 部署 MSW 注意事项

- 网页上不能监听默认端口以外的端口，所以只能使用拦截特定路由而不是端口，如 `/api`，避免和前端路由冲突。
- service worker 不能在没有 https 的条件下运行。
