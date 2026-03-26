import app, { initApp } from "../src/app.js";

export default async function handler(req, res) {
  await initApp();
  return app(req, res);
}
