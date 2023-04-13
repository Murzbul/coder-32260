import UserDaoFactory from "../factories/userDaoFactory.js";
import User from "../entities/user.js";

class UserRepository
{
  constructor()
  {
      this.dao = UserDaoFactory.create(process.env.DAO);
  }

  async create(data)
  {
      const userDto = await this.dao.create(data);

      return new User(userDto);
  }

  async getOne(id)
  {
      return this.dao.getOne(id);
  }
}

export default UserRepository;
