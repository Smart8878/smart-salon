const UserService = require('../services/user.service');

class UserController {

  async getUser(req, res) {
    try {
      const data = await UserService.getUser(req.params);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async createUser(req, res) {
    try {
      console.log(req.body);
      const data = await UserService.createUser(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async updateUser(req, res) {
    try {
      const data = await UserService.updateUser(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

}

module.exports = new UserController();
