import UserMemoryDao from "../persistence/userMemoryDao.js";
import UserMongooseDao from "../persistence/userMongooseDao.js";

class UserDaoFactory
{
    static create(daoKey)
    {
        const daos = {
            memory: UserMemoryDao,
            mongoose: UserMongooseDao
        }

        return new daos[daoKey];
    }

}

export default UserDaoFactory;
