import OrderMongooseDao from "../daos/orderMongooseDao.js";
import UserMongooseDao from "../daos/userMongooseDao.js";
import BusinessMongooseDao from "../daos/businessMongooseDao.js";

class OrderService
{
    constructor()
    {
      this.orderDao = new OrderMongooseDao();
      this.userDao = new UserMongooseDao();
      this.businessDao = new BusinessMongooseDao();
    }

    async create(data)
    {
        await this.userDao.getOne(data.user);
        const business = await this.businessDao.getOne(data.business);

        const productsFilterIds = business.products
            .filter(product => data.products.includes(product.id))
            .map(productObject => productObject.id);

        data.products = productsFilterIds;

        if(productsFilterIds.length === 0)
        {
            throw new Error('Empty products');
        }

        return this.orderDao.create(data);
    }

    async update(id, data)
    {
        return this.orderDao.update(id, data);
    }

    async getOne(id)
    {
        return this.orderDao.getOne(id);
    }

    async list()
    {
        return this.orderDao.list();
    }
}

export default OrderService;
