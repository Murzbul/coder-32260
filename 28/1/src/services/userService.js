import UserRepository from "../repositories/userRepository.js";

// Logica de negocio
class UserService
{
  constructor()
  {
      this.userRepository = new UserRepository();
  }

  async create(payload)
  {
      return this.userRepository.create(payload);
  }

  async getOne(id)
  {
      return await this.userRepository.getOne(id);
  }

  async process(id)
  {
      const user = await this.userRepository.getOne(id); // Esto me devuelve un User (Entidad de Negocio)

      // Logica de negocio relacionado con el usuario
      // 1
      // 2
      // ...

      return user;
  }
}

export default UserService;
