let cachedHandler;

module.exports = async (req, res) => {
  if (!cachedHandler) {
    const appModule = await import("../src/app.js");
    await appModule.initApp();
    cachedHandler = appModule.default;
  }

  return cachedHandler(req, res);
};
