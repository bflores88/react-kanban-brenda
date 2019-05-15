const bookshelf = require('../bookshelf');

require('./Card')
class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }
  get hasTimestamps() {
    return true;
  }

  cards () {
    return this.hasMany('Cards', 'assigned_to');
  }

}

module.exports = bookshelf.model('User', User);