## documents

### 什么时候使用 flex 什么时候使用 grid

```javascript
/**
 *grid和fLex各自的应用场景
 *1.要考虑，是一维布局还是二维布局
 *一般来说，一维布局用fLeX，二维布局用grid
 *2：是从内容出发还是从布局出发？
 *从内容出发：你先有一组内容（数量一般不固定），然后希望他们均匀的分布在容器中，由内容本身大小决定占据的空间
 *从布局出发：先规划网格（数量一般比较固定），然后再把元素往里填充
 *从内容出发，用fLex*从布局出发，用grid
 */
```

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
