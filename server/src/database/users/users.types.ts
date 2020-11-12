import { Document, Model } from "mongoose";
export interface IUser {
    username: string,
    password: string,
    firstName: string;
    lastName: string;
    age: number;
    dateOfEntry?: Date;
    lastUpdated?: Date;
}
export interface IUserDocument extends IUser, Document {
    setLastUpdated: (this: IUserDocument) => Promise<void>;
    sameLastName: (this: IUserDocument) => Promise<Document[]>;
    userToResponse: (this: IUserDocument) => {};
}
export interface IUserModel extends Model<IUserDocument> {
    findOneOrCreate: (this: IUserModel, { username, password, firstName, lastName, age }: { username: string; password: string; firstName: string; lastName: string; age: number }) => Promise<IUserDocument>;
    findByAge: (this: IUserModel, min?: number, max?: number) => Promise<IUserDocument[]>
}