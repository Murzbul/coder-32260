import userSchema from "../models/userSchema.js";

class UserMongooseDao
{
   async create(data)
   {
      const userDocument = await userSchema.create(data);

      return {
        id: userDocument._id,
        firstName: userDocument.firstName,
        email: userDocument.email,
        role: userDocument.role,
        orders: userDocument.orders,
    };
   }

   async update(user)
   {
      const { id, firstName } = user;
      const userDocument = await userSchema.findOneAndUpdate({ _id: id }, { firstName });

      if(!userDocument)
      {
          throw new Error('User Not Found');
      }

      return {
        id: userDocument._id,
        firstName: userDocument.firstName,
        email: userDocument.email,
        role: userDocument.role,
        orders: userDocument.orders,
    };
   }

   async getOne(id)
   {
      const userDocument = await userSchema.findOne({ _id: id}).lean();

      if(!userDocument)
      {
          throw new Error('User Not Found');
      }

      return {
        id: userDocument._id,
        firstName: userDocument.firstName,
        email: userDocument.email,
        role: userDocument.role,
        orders: userDocument.orders,
    };
   }

   async list()
   {
      const users = await userSchema.find().lean();

      return users.map(userDocument => ({
        id: userDocument._id,
        firstName: userDocument.firstName,
        email: userDocument.email,
        role: userDocument.role,
        orders: userDocument.orders,
      }))
   }
}

export default UserMongooseDao;
