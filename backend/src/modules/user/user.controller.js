

const userController = {
  getAll: (req, res, next) => {
    res.json({ message: 'respond with a all' });
  },

  getProfile: (req, res, next) => {
    res.json({ message: 'respond with a profile' });
  },
}

export default userController;
