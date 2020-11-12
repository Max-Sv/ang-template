import { IUserDocument } from "./users.types";
import { Document } from "mongoose";
export async function setLastUpdated(this: IUserDocument): Promise<void> {
    const now = new Date();
    if (!this.lastUpdated || this.lastUpdated < now) {
        this.lastUpdated = now;
        await this.save();
    }
}
export async function sameLastName(this: IUserDocument): Promise<Document[]> {
    return this.model('users').find({ lastName: this.lastName })
}
export function userToResponse(this: IUserDocument): {} {
    return { username: this.username, lastName: this.lastName, firstName: this.firstName }
}