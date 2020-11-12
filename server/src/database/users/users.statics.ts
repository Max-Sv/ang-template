import { IUserDocument, IUserModel } from "./users.types";

export async function findOneOrCreate(this: IUserModel, { username, password, firstName, lastName, age }: { username: string; password: string; firstName: string; lastName: string; age: number }): Promise<IUserDocument[] | IUserDocument> {
    const record = await this.find({ username, password, firstName, lastName, age });
    if (record) {
        return record;
    } else {
        return this.create({ username, password, firstName, lastName, age })
    }
}
export async function findByAge(this: IUserModel, min?: number, max?: number): Promise<IUserDocument[]> {
    return this.find({ age: { $gte: min || 0, $lte: max || Infinity } })
}