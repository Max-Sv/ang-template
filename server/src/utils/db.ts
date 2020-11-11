import HttpException from '../models/HttpException';
import User from '../resources/users/user.model';
const db = {
  Users: [],
  Boards: [],

};
(() => {
  console.log('Creating test users');
  for (let i = 0; i < 3; i++) {
    const user = new User({ id: i, username: `user${i}`, password: 'test', firstName: 'Test', lastName: 'User' });
    db.Users.push(user);
  }
})();

const getAllEntities = (tableName) => {
  // throw new HttpException(404, 'Post not found')
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(db[tableName].filter(entity => entity));
    }, 2000);
  });

  // return db[entity];
}
const getEntity = (tableName, id) => {
  const entity = db[tableName].filter(entity => entity).filter(entity => entity.id === id)
  if (entity.lengtn > 1) {
    throw new HttpException(404, 'Post not found')
  }
  return db[entity][id];
}
const createEntity = (tableName, user) => {
  const { id } = user;
  db[tableName].push(user);
  const entity = db[tableName].filter(entity => entity).filter(entity => entity.id === id)
  if (entity.lengtn > 1) {
    throw new HttpException(404, 'Post not found')
  }
  return entity;
}
export = {
  getAllEntities,
  getEntity,
  createEntity
}