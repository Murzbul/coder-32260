import userSchema from "../models/userSchema.js";

class UserMongooseDao
{
  async create(data)
  {
    const user = await userSchema.create(data);

    return {
      id: user._id,
      firstName: user.firstName
    }
  }

  async getOne(id)
  {
    const user = await userSchema.findOne({ _id: id}).lean();

    return {
      id: user._id,
      firstName: user.firstName
    }
  }


  async list()
  {
    const users = await userSchema.find().lean();

    return users.map(user => ({
      id: user._id,
      firstName: user.firstName
    }))
  }
}

export default UserMongooseDao;
