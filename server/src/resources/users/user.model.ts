// class User {
//   id: number;
//   username: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   token?: string;
//   constructor({ id = 1, username = 'user', password = '123', firstName = 'name', lastName = 'lName' } = {}) {
//     this.id = id;
//     this.username = username;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.password = password;
//   }
// }

// export = User;

import mongoose, { Schema } from 'mongoose';
interface IUserToResponse {
  username: String,
  password: String,
  firstName: String,
  lastName: String
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});
// function toResponse(user): UserToResponse {
//   const { id, username, firstName, lastName } = user;
//   return { id, username, firstName, lastName };
// }
export default mongoose.model<IUserToResponse>('users', UserSchema)

