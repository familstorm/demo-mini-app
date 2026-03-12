
export default function notFoundMiddleware(req, res, next) {
  res.status(404).json({
    status: 404,
    error: "Not Found",
    message: `Route ${req.originalUrl} not found`
  })
  next()
}
