import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  chainWebpack(memo, args) {
    memo.resolve.alias.set(
      'lcx-design',
      path.resolve(__dirname, '../packages/lcx-design/components/'),
    );
    memo.resolve.alias.set(
      'lcx-design-icon',
      path.resolve(__dirname, '../packages/lcx-design-icon/react'),
    );
  },
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
