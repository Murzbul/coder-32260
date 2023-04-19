import businessSchema from "../models/businessSchema.js";

class BusinessMongooseDao
{
   async create(data)
   {
      const businessDocument = await businessSchema.create(data);

      return {
        id: businessDocument._id,
        name: businessDocument.name,
        products: businessDocument.products
    };
   }

   async update(business)
   {
      const { id, name } = business;
      const businessDocument = await businessSchema.findByIdAndUpdate({ _id: id}, { name });

      if(!businessDocument)
      {
          throw new Error('Business Not Found');
      }

      return {
        id: businessDocument._id,
        name: businessDocument.name,
        products: businessDocument.products
    };
   }

   async getOne(id)
   {
      const businessDocument = await businessSchema.findOne({ _id: id}).lean();

      if(!businessDocument)
      {
          throw new Error('Business Not Found');
      }

      return {
        id: businessDocument._id,
        name: businessDocument.name,
        products: businessDocument.products
    };
   }

   async list()
   {
      const businessesDocument = await businessSchema.find().lean();

      return businessesDocument.map(businessDocument => ({
        id: businessDocument._id,
        name: businessDocument.name,
        products: businessDocument.products
      }))
   }

   async save(data)
   {
      const { id, products } = data;
      const businessDocument = await businessSchema.findByIdAndUpdate({ _id: id }, { products }).lean();

      if(!businessDocument)
      {
          throw new Error('Business Not Found');
      }

      return {
        id: businessDocument._id,
        name: businessDocument.name,
        products: businessDocument.products
      };
   }
}

export default BusinessMongooseDao;
