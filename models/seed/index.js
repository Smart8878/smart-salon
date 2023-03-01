const { User } = require('../index');

const Users = [
  {
    "id": 1,
    "name": "A Martinez",
    "email": "test.user@gmail.com",
    "number": 1236547890,
    "description": "Adolph Larrue Martinez III.",
    "type":"customer",
    "profile_image": "https://soulverse.boo.world/images/1.png",
  }
];

async function initSeed() {
  let user = await User.getByQuery({ id: { $in: Users.map(p => p.id) } }, { findOne: true });
  if (!user) {
    await User.create(Users);
  }
}

module.exports.initSeed = initSeed;
