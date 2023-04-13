import UserService from "../services/userService.js";
import z from 'zod';

export async function createUser (req, res, next)
{
    try
    {
        const payloadId = z.object({
          firstName: z.string().min(5),
          age: z.number().optional().default(10)
        });
        const payload = payloadId.parse(req.body); // { firstName: 'Camila', age: 10 }

        const userService = new UserService();
        const user = await userService.create(payload);

        res.status(201).json({ data: user });
    }
    catch (e)
    {
        next(e);
    }
}

export const getUser = async(req, res, next) =>
{
    try
    {
        const { id } = req.params;

        const payloadId = z.object({
          id: z.string().min(24)
        });
        payloadId.parse(req.params);

        const userService = new UserService();
        const user = await userService.getOne(id);

        res.status(200).json({ data: user })
   }
   catch (e)
   {
      next(e);
   }
}
