import UserDaoFactory from "../factories/userDaoFactory.js";

class UserService
{
  constructor()
  {
      this.userDao = UserDaoFactory.create(process.env.DAO);
  }

  async create(payload)
  {
      return this.userDao.create(payload);
  }

  async getOne(id)
  {
      return this.userDao.getOne(id);
  }
}

export default UserService;
