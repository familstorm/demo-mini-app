import authenticate from './authentication.middleware.js'

export const AuthGuard = (router) => {
  return (req, res, next) => {
    if (router.isPublic) {
      return router(req, res, next)
    }

    return authenticate(req, res, () => {
      return router(req, res, next)
    })
  }
}
