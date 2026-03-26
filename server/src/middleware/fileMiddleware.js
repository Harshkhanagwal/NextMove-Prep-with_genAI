const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 3 * 1024 * 1024,
  },
});

const handleResumeUpload = (req, res, next) => {
  const middleware = upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]);

  middleware(req, res, (error) => {
    if (error instanceof multer.MulterError) {
      return res.status(400).json({
        message:
          error.code === "LIMIT_UNEXPECTED_FILE"
            ? `Unexpected file field: ${error.field}. Use 'resume' or 'file'.`
            : error.message,
      });
    }

    if (error) {
      return res.status(400).json({
        message: error.message || "File upload failed",
      });
    }

    const uploadedFile =
      req.files?.resume?.[0] ||
      req.files?.file?.[0] ||
      null;

    req.file = uploadedFile;
    next();
  });
};

module.exports = { upload, handleResumeUpload };
