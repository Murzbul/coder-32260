
class UserMemoryDao
{
  async create(data)
  {
    return {
      id: 'f6903b57-6b37-4a0c-8f6b-0752021dd0bf',
      firstName: data.firstName
    }
  }

  async getOne(id)
  {
    return {
      id,
      firstName: 'Armando'
    }
  }

  async list()
  {
    const users = [
        {
          id: 'f6903b57-6b37-4a0c-8f6b-0752021dd0bf',
          firstName: 'Armando'
        }
    ];

    return users.map(user => ({
      id: user._id,
      firstName: user.firstName
    }))
  }
}

export default UserMemoryDao;
