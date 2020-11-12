import { UserModel } from "../database/users/users.model";
import { connect, disconnect } from "../database/database";

export const createDammyData = async () => {
    connect();

    const users = [
        { username: "Emma", password: '123', firstName: "Emma", lastName: "Bradley", age: 34 },
        { username: "Elise", password: '123', firstName: "Elise", lastName: "Conner", age: 62 },
        { username: "Jack", password: '123', firstName: "Jack", lastName: "Lawson", age: 20 },
        { username: "Oliver", password: '123', firstName: "Oliver", lastName: "Moss", age: 80 },
        { username: "Jamie", password: '123', firstName: "Jamie", lastName: "Reid", age: 52 },
        { username: "Aidan", password: '123', firstName: "Aidan", lastName: "Bradley", age: 73 },
        { username: "Jordan", password: '123', firstName: "Jordan", lastName: "Gallagher", age: 27 },
        { username: "Erin", password: '123', firstName: "Erin", lastName: "Miles", age: 23 },
        { username: "William", password: '123', firstName: "William", lastName: "May", age: 39 },
        { username: "Ethan", password: '123', firstName: "Ethan", lastName: "Butler", age: 68 },
    ];

    try {
        for (const user of users) {
            await UserModel.create(user);
            console.log(`Created user ${user.firstName} ${user.lastName}`);
        }

        disconnect();
    } catch (e) {
        console.log(e);
    }
}