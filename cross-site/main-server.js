// cross-site/main-server.js
// 主应用服务代码
import path from "path";
import express from "express";
// import ngrok from "ngrok";
import ejs from "ejs";

import config from "../config.js";
const { port, host, authtoken, __dirname } = config;
const app = express();

// 内网穿透（主应用反向代理）
// const main = await ngrok.connect({
//   proto: "http",
//   ...(authtoken ? { authtoken }: {}),
//   addr: `http://${host}:${port.main}`,
//   bind_tls: true,
// });

// console.log("main app ngrok url: ", main);

// 内网穿透（微应用反向代理）
// const micro = await ngrok.connect({
//   proto: "http",
//   ...(authtoken ? { authtoken }: {}),
//   addr: `http://${host}:${port.micro}`,
//   // 使用 https 协议
//   bind_tls: true,
// });

// console.log("micro app ngrok url: ", micro);

app.engine(".html", ejs.__express);
app.set("views", path.join(__dirname, "public"));
app.set("view engine", "html");

app.get("/", function (req, res) {
  res.cookie("main-app", "true");
  res.render("main", {
    micro: `http://ziyi.example.com:${port.micro}`,
    // micro: 'https://95e0-14-153-81-22.ngrok-free.app',
  });
});

// 启动 Node 服务
app.listen(port.main, host);
console.log(`server start at http://${host}:${port.main}/`);
