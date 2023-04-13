import userSchema from "../models/userSchema.js";
import UserDto from "../dtos/UserDto.js";

class UserMongooseDao
{
  async create(data)
  {
    const userDocument = await userSchema.create(data);

    return new UserDto({
      id: userDocument._id,
      firstName: userDocument.firstName
    });
  }

  async getOne(id)
  {
    const user = await userSchema.findOne({ _id: id}).lean();

    return new UserDto({
      id: user._id,
      firstName: user.firstName
    });
  }

  async list()
  {
    const users = await userSchema.find().lean();

    return users.map(user => {
      return new UserDto({
        id: user._id,
        firstName: user.firstName
      });
    });
  }
}

export default UserMongooseDao;
