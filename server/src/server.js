import app, { initApp } from "./app.js";
const PORT = process.env.PORT || 5001;

const startServer = async () => {
  await initApp();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
