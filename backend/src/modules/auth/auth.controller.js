import AuthService from "./auth.service.js";

const authController = {
  login: async (req, res, next) => {
    try {
      const result = await AuthService.loginUser(req.body)

      if (!result.status) {
        return res.status(401).json(result)
      } else {
        res.setHeader('Authorization', `Bearer ${result.token}`)

        return res.json(result)
      }
    } catch (error) {
      return res.status(401).json('Logout failed')
    }
  },

  logout: async (req, res, next) => {
    return res
      .status(201)
      .json({ message: 'Logout success.' })
  },

}

export default authController;
