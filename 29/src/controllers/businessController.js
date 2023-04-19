import { z } from "zod";
import BusinessService from "../services/businessService.js";

const service = new BusinessService();

export async function createBusiness(req, res, next)
{
  try
  {
      const payloadId = z.object({
        name: z.string().min(5),
        products: z.any().array().nonempty()
      });
      const payload = payloadId.parse(req.body);

      const business = await service.create(payload);

      res.status(201).json({ data: business })
  }
  catch (e)
  {
      next(e);
  }
}

export async function updateBusiness(req, res, next)
{
  try
  {
      const payloadId = z.object({
        name: z.string().min(5),
        id: z.string().min(24)
      });
      const payload = payloadId.parse({ ...req.body, ...req.params });

      const business = await service.update(payload);

      res.status(201).json({ data: business })
  }
  catch (e)
  {
      next(e);
  }
}

export async function getBusiness(req, res, next)
{
  try
  {
      const business = await service.getOne(req.params.id);

      res.status(200).json({ data: business })
  }
  catch (e)
  {
      next(e);
  }
}

export async function listBusinesses(req, res, next)
{
  try
  {
      const businesses = await service.list();

      res.status(200).json({ data: businesses })
  }
  catch (e)
  {
      next(e);
  }
}

export async function addProducts(req, res, next)
{
  try
  {
      const payloadId = z.object({
        id: z.string().min(24)
      });
      const payload = payloadId.parse({ ...req.body, ...req.params });

      const business = await service.addProduct(payload);

      res.status(200).json({ data: business })
  }
  catch (e)
  {
      next(e);
  }
}
