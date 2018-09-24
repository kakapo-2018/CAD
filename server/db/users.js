var hash = require('../auth/hash');

const db = require('./connection');

function createUser(user_name, password) {
  return new Promise((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err);

      db('users')
        .insert({ user_name, hash })
        .then(user_id => resolve(user_id))
        .catch(err => reject(err));
    });
  });
}
function userExists(user_name) {
  return db('users')
    .where('user_name', user_name)
    .first();
}

function getUserByName(user_name) {
  return db('users')
    .where('user_name', user_name)
    .first();
}

function getUserByID(user_id) {
  return db('users')
    .where('id', user_id)
    .first()
    .then(userInfo => {
      delete userInfo.hash;
      return userInfo;
    })
    .catch(err => {});
}

function getUsers() {
  return db('users').select();
}

module.exports = {
  createUser,
  userExists,
  getUserByName,
  getUserByID,
  getUsers
};