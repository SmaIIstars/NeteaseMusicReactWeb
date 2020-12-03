const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      assets: resolve("src/assets"),
      common: resolve("src/common"),
      components: resolve("src/components"),
      network: resolve("src/network"),
      pages: resolve("src/pages"),
      route: resolve("src/router"),
      utils: resolve("src/utils"),
      containers: resolve("src/containers"),
    },
  },
};
