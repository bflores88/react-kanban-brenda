const bookshelf = require('../bookshelf');

require('./Card')
class Priority extends bookshelf.Model {
  get tableName() {
    return 'priorities';
  }
  get hasTimestamps() {
    return true;
  }

  cards () {
    return this.hasMany('Cards', 'priority_id');
  }

}

module.exports = bookshelf.model('Priority', Priority);