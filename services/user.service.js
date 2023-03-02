const { User } = require('../models');

class UserService {

  async getUser(query) {
    if (query?.id) {
      delete query.id
      query._id = id
    }
    console.log("querrrrries",query)
    const user = await User.getByQuery(query, { findOne: !!query?.id });
    return user;
  }

  async createUser(user) {
    user = await User.create(user);
    return user;
  }

  async updateUser(user) {
    let _id = user._id;
    delete user._id;
    await User.updateByQuery({ _id: _id }, user);
    user = await this.getUser({ id });
    return user;
  }
}

module.exports = new UserService();
