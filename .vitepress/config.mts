import { defineConfig } from 'vitepress'
import typedocSidebar from '../api/typedoc-sidebar.json';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sunrise-utils",
  description: "工具函数",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'API',
        items: typedocSidebar
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '其实我也不知道写啥注脚',
      copyright: '那我就随便写个吧',
    }
  }
})
