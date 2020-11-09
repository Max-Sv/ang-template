import User from '../resources/users/user.model';
const db = {
    Users: [],

};
(() => {
    console.log('Creating test users');
    for (let i = 0; i < 3; i++) {
        const user = new User({ id: i, name: `user${i}` });
        db.Users.push(user);
    }
})();

const getAllEntities = (entity) => {

    // return new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve(db[entity]);
    //     }, 1000);
    // });

    return db[entity];
}
const getEntity = (entity, id) => {
    return db[entity][id];

}
export = {
    getAllEntities,
    getEntity
}