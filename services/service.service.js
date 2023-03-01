const { Service } = require('../models');

class ServiceService {

  async getService({ id }) {
    const query = {};
    if (id) query._id = id;
    const service = await Service.getByQuery(query, { findOne: !!id });
    return service;
  }

  async createService(service) {
    service = await Service.create(service);
    return service;
  }

  async updateService(service) {
    let _id = service._id;
    delete service._id;
    await Service.updateByQuery({ _id: _id }, { $set: service });
    service = await this.getService({ id });
    return service;
  }
}

module.exports = new ServiceService();
