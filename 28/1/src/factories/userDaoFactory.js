import UserMemoryDao from "../persistence/userMemoryDao.js";
import UserMongooseDao from "../persistence/userMongooseDao.js";

class UserDaoFactory
{
    static create(daoKey)
    {
        const daos = new Map();
        daos.set('memory', UserMemoryDao);
        daos.set('mongoose', UserMongooseDao);

        const dao = daos.get(daoKey);
        return new dao;
    }
}

export default UserDaoFactory;
