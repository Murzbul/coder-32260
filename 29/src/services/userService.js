import UserMongooseDao from "../daos/userMongooseDao.js";

class UserService
{
    constructor()
    {
      this.dao = new UserMongooseDao();
    }

    async create(data)
    {
        return this.dao.create(data);
    }

    async update(data)
    {
        return this.dao.update(data);
    }

    async getOne(id)
    {
        return this.dao.getOne(id);
    }

    async list()
    {
        return this.dao.list();
    }
}

export default UserService;
