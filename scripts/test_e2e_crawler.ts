import http from "http";

async function fetchUrl(url: string): Promise<{ status: number; body: string; headers: any }> {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => resolve({ status: res.statusCode || 0, body, headers: res.headers }));
      res.on("error", reject);
    }).on("error", reject);
  });
}

async function run() {
  console.log("=== [E2E] HTTP 服务全路由探针与 DOM 关键锚点走查 ===");
  const routes = [
    { path: "/", expectedTitle: "小蓝本" },
    { path: "/volume/1", expectedTitle: "因式分解技巧" },
    { path: "/volume/2", expectedTitle: "方程与方程组" },
    { path: "/volume/3", expectedTitle: "一次函数与二次函数" },
    { path: "/volume/4", expectedTitle: "三角形与四边形" },
    { path: "/volume/5", expectedTitle: "圆" },
    { path: "/volume/6", expectedTitle: "整除、同余与不定方程" },
    { path: "/volume/7", expectedTitle: "组合趣题" },
    { path: "/volume/8", expectedTitle: "初中数学竞赛中的解题方法与策略" },
    { path: "/volume/999", expectedStatus: 404 },
    { path: "/invalid-route", expectedStatus: 404 }
  ];

  let passCount = 0;
  let failCount = 0;

  for (const r of routes) {
    const port = process.env.PORT || 3000;
    const url = `http://localhost:${port}${r.path}`;
    try {
      const res = await fetchUrl(url);
      const expectedCode = r.expectedStatus || 200;
      if (res.status !== expectedCode) {
        console.error(`❌ [FAIL] ${r.path}: HTTP 状态码不符！期望 ${expectedCode}，实际 ${res.status}`);
        failCount++;
        continue;
      }

      if (r.expectedTitle && !res.body.includes(r.expectedTitle)) {
        console.error(`❌ [FAIL] ${r.path}: 响应 HTML 未包含期望关键词 "${r.expectedTitle}"`);
        failCount++;
        continue;
      }

      // 检查 HTML 中是否包含常见崩溃标记
      if (res.body.includes("Application error: a client-side exception has occurred") || res.body.includes("Internal Server Error")) {
        console.error(`❌ [FAIL] ${r.path}: 检测到崩溃错误提示！`);
        failCount++;
        continue;
      }

      console.log(`✅ [PASS] ${r.path} -> HTTP ${res.status} (尺寸: ${(res.body.length / 1024).toFixed(1)} KB)`);
      passCount++;
    } catch (e: any) {
      console.error(`❌ [FAIL] ${r.path}: 网络请求异常 ${e.message}`);
      failCount++;
    }
  }

  console.log(`\n走查汇总: 通过 ${passCount} / 失败 ${failCount}`);
}

run();
