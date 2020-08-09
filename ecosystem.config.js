module.exports = {
  apps : [
      {
        name: "placeholderapp",
        script: "./app.js",
        watch: true,
        env: {
          "NODE_ENV": "development",
        }
      }
  ]
}