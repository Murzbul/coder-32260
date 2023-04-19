import orderSchema from "../models/orderSchema.js";

class OrderMongooseDao
{
   async create(data)
   {
      const orderDocument = await orderSchema.create(data);

      return {
        id: orderDocument._id,
        number: orderDocument.number,
        business: orderDocument.business,
        user: orderDocument.user,
        products: orderDocument.products,
        totalPrice: orderDocument.totalPrice
    };
   }

   async update(id, order)
   {
      const orderDocument = await orderSchema.updateOne({ _id: id}, {$set:order});

      return {
        id: orderDocument._id,
        number: orderDocument.number,
        business: orderDocument.business,
        user: orderDocument.user,
        products: orderDocument.products,
        totalPrice: orderDocument.totalPrice
    };
   }

   async getOne(id)
   {
      const orderDocument = await orderSchema.findOne({ _id: id}).lean();

      if(!orderDocument)
      {
          throw new Error('Order Not Found');
      }

      return {
        id: orderDocument._id,
        number: orderDocument.number,
        business: orderDocument.business,
        user: orderDocument.user,
        products: orderDocument.products,
        totalPrice: orderDocument.totalPrice
    };
   }

   async list()
   {
      const products = await orderSchema.find().populate(['user']).lean();

      return products.map(orderDocument => ({
        id: orderDocument._id,
        number: orderDocument.number,
        business: orderDocument.business,
        user: orderDocument.user,
        products: orderDocument.products,
        totalPrice: orderDocument.totalPrice
      }))
   }
}

export default OrderMongooseDao;
