// 微应用容器元素的 ID
export const MICRO_APP_CONTAINER_ID = "micro-app-container";

export const MICRO_APP_ROUTER = {
  REACT: "react",
  VUE: "vue",
};

// 菜单信息，这里用于 Mock 后端数据
// 真实业务可能是一个树状的带权限的菜单信息
export const mockMicroApps = [
  {
    // 应用标识
    name: "react",
    // 菜单名称
    title: "React Micro App",
    app: "http://localhost:3000/main.js",
    // 激活路由
    router: MICRO_APP_ROUTER.REACT,
  },
  {
    name: "vue",
    title: "Vue Micro App",
    app: "http://192.168.31.168:8080/js/app.js",
    router: MICRO_APP_ROUTER.VUE,
  },
];
