// global error handler middleware
const globalErrorHandler = (err, req, res, next) => {
  const stack = err.stack;
  const message = err.message;
  const status = err.status || "failed";
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status,
    message,
    stack,
  });
};

const notFoundHandler = (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  next(err);
};

module.exports = { globalErrorHandler, notFoundHandler };
