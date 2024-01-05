const express = require("express");
const pages = require("./mock/pages.json");
// 创建一个 express 应用实例
const app = express();

// 定义一个处理 GET 请求的路由
app.post("/auth/login", (req, res) => {
  // 发送响应信息 "Hello, World!"
  res.send({
    code: 1,
    data: {
      token: "1234567890",
    },
  });
});
app.get("/album/queryByPage", (req, res) => {
  // 发送响应信息 "Hello, World!"
  res.send(pages);
});

// 设置监听端口
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
