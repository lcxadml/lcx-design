import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'lcx-design',
    logo: false,
    nav: [
      {
        title: '首页',
        link: '/',
        activePath: '高亮路径',
      },
      {
        title: '组件',
        link: '/components/button',
      },
    ],
  },
});
