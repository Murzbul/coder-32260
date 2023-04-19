import BusinessMongooseDao from "../daos/businessMongooseDao.js";
import { v4 } from "uuid";

class BusinessService
{
    constructor()
    {
      this.dao = new BusinessMongooseDao();
    }

    async create(data)
    {
        data.products = data.products.map(product => ({
         id: v4(),
         ...product
        }));

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

    async addProduct(data)
    {
        const business = this.getOne(data.id);

        const products = data.map(product => ({
            id: v4(),
           ...product
        }));

        // Siempre son considerados nuevos productos independientemente del nombre ya que son IDs unicos
        business.concat(products);

        return this.dao.save(business);
    }
}

export default BusinessService;
