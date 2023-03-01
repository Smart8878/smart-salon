const ServiceService = require('../services/service.service');
const UserService = require('../services/user.service');

class ServiceController {

  async getService(req, res) {
    try {
      const data = await ServiceService.getService(req.params);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async createService(req, res) {
    try {
      console.log(req.body);
      const data = await ServiceService.createService(req.body);
      res.status(200).json(data);
    } catch (err) {
      console.log("eeeee", err)
      res.status(400).json(err);
    }
  }

  async updateService(req, res) {
    try {
      const data = await ServiceService.updateService(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

}

module.exports = new ServiceController();
