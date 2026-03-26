const app = require("./app.js");
const { initApp } = require("./app.js");
const PORT = process.env.PORT || 5001;

const startServer = async () => {
  await initApp();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
