
class User
{
  constructor(userDto)
  {
      this.id = userDto.id;
      this.firstName = userDto.firstName;
  }

  getFullName()
  {
     return `${this.id} - ${this.firstName}`
  }
}

export default User;
