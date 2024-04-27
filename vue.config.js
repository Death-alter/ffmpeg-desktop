const { defineConfig } = require("@vue/cli-service");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    name: "ffmpeg-desktop",
    resolve: {
      alias: {
        "@": resolve("src"),
        components: "@/components",
      },
    },
  },
});
