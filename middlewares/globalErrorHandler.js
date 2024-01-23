// global error handler middleware
const globalErrorHandler = app.use((req, res, next, err) => {
  const stack = err.stack;
  const message = err.message;
  const status = err.status || "failed";
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status,
    message,
    stack,
  });
});

module.exports = globalErrorHandler;
