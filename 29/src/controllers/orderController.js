import { z } from "zod";
import OrderService from "../services/orderService.js";

const service = new OrderService();

export async function createOrder(req, res, next)
{
  try
  {
      const payloadId = z.object({
        business: z.string().min(24),
        user: z.string().min(5),
        products: z.any().array().nonempty()
      });
      const payload = payloadId.parse(req.body);

      const order = await service.create(payload);

      res.status(201).json({ data: order })
  }
  catch (e)
  {
      next(e);
  }
}

export async function getOrder(req, res, next)
{
  try
  {
      const order = await service.getOne(req.params.id);

      res.status(200).json({ data: order })
  }
  catch (e)
  {
      next(e);
  }
}

export async function listOrders(req, res, next)
{
  try
  {
      const orders = await service.list();

      res.status(200).json({ data: orders })
  }
  catch (e)
  {
      next(e);
  }
}

export async function resolveOrder(req, res, next)
{
  try
  {
      // const orders = await service.resolveOrder();

      res.status(200).json({ data: 'data' })
  }
  catch (e)
  {
      next(e);
  }
}
