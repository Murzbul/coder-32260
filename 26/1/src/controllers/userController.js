import UserService from "../services/userService.js";

export const createUser = async(req, res) =>
{
    // Faltaria agregar una validacion
    const payload = req.body;

    const userService = new UserService();
    const user = await userService.create(payload);

    res.status(201).json({ data: user })
}

export const getUser = async(req, res) =>
{
    // Faltaria agregar una validacion
    const { id } = req.params;

    const userService = new UserService();
    const user = await userService.getOne(id);

    res.status(200).json({ data: user })
}
