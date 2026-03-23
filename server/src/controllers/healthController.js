export const getHealth = (_req, res) => {
  res.json({
    ok: true,
    message: "Server is healthy"
  });
};
