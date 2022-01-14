const PercyScript = require('@percy/script');
const httpServer = require('http-server');

const PORT = process.env.PORT_NUMBER || 3000;
const TEST_URL = `http://localhost:${PORT}/build`;

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  let server = httpServer.createServer();
  server.listen(PORT);

  console.log(`Server started at ${TEST_URL}`);

  await page.goto(TEST_URL);
  await percySnapshot('index',{ widths: [375, 767, 1280] });

  server.close();
});
