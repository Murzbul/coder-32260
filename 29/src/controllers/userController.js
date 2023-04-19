import { z } from "zod";
import UserService from "../services/userService.js";

const service = new UserService();

export async function createUser(req, res, next)
{
  try
  {
      const payloadId = z.object({
        firstName: z.string().min(5),
        email: z.string().email(),
        role: z.string(),
        orders: z.string().array().length(0)
      });
      const payload = payloadId.parse(req.body);

      const user = await service.create(payload);

      res.status(201).json({ data: user })
  }
  catch (e)
  {
      next(e);
  }
}

export async function updateUser(req, res, next)
{
  try
  {
      const payloadId = z.object({
        firstName: z.string().min(5),
        id: z.string().min(24)
      });
      const payload = payloadId.parse({ ...req.body, ...req.params });

      const user = await service.update(payload);

      res.status(201).json({ data: user })
  }
  catch (e)
  {
      next(e);
  }
}

export async function getUser(req, res, next)
{
  try
  {
      const user = await service.getOne(req.params.id);

      res.status(200).json({ data: user })
  }
  catch (e)
  {
      next(e);
  }
}

export async function listUser(req, res, next)
{
  try
  {
      const users = await service.list();

      res.status(200).json({ data: users })
  }
  catch (e)
  {
      next(e);
  }
}
