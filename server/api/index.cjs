let cachedHandler;

module.exports = async (req, res) => {
  if (!cachedHandler) {
    const app = require("../src/app.js");
    await app.initApp();
    cachedHandler = app;
  }

  return cachedHandler(req, res);
};
