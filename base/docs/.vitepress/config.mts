import { DefaultTheme, defineConfig } from "vitepress";
import fs from "fs";
import path from "path";

const getApiSideBar = () => {
  const apiDir = path.resolve(__dirname, "../api");
  const files = fs.readdirSync(apiDir);

  const res: DefaultTheme.Sidebar = [];
  for (let i = 0; i < files?.length; i++) {
    const file = files[i];
    if (file.endsWith(".md")) {
      continue;
    }

    const internalFile = fs.readdirSync(path.join(apiDir, file));
    const internalPath = path.join(apiDir, file);
    const d = fs.statSync(internalPath);

    if (d.isDirectory()) {
      res.push({
        text: file,
        items: internalFile
          .map((item) => {
            if (item.endsWith(".md")) {
              return {
                text: item?.split(".")[0],
                link: `/api/${file}/${item}`,
              };
            }
            return null;
          })
          ?.filter((item) => !!item),
      });
    }
  }
  return res;
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "base api",
  description: "base api",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "docs", link: "/api/README.md" },
    ],

    sidebar: getApiSideBar(),

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
