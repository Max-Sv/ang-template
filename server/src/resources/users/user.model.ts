class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
  constructor({ id = 1, username = 'user', password = '123', firstName = 'name', lastName = 'lName' } = {}) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }
}

export = User;