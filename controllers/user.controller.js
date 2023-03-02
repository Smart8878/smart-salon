const UserService = require('../services/user.service');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

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
      const salt = crypto.randomBytes(16).toString('hex')
      const payload = {
        ...req.body,
        salt: salt,
        hash: crypto.pbkdf2Sync(req.body.password, salt,
          1000, 64, `sha512`).toString(`hex`)
      }
      const token = jwt.sign({
        data: { email: req.body.email }
      }, 'secret', { expiresIn: '1h' });
      const data = await UserService.createUser(payload);
      res.status(200).json({ data, token, status: true });
    } catch (err) {
      console.log("error", err)
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

  async userLogin(req, res) {
    try {
      const data = await UserService.getUser({ email: req.body.email });
      if (data) {
        var hash = crypto.pbkdf2Sync(req.body.password,
          data[0].salt, 1000, 64, `sha512`).toString(`hex`);
        const token = jwt.sign({
          data: { email: req.body.email }
        }, 'secret', { expiresIn: '1h' });
        res.status(200).json({ "status": hash === data[0].hash, token });
      }
    }
    catch (err) {
      console.log("error", err)
      res.status(400).json(err);
    }
  }

}

module.exports = new UserController();
