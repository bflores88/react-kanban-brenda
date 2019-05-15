const bookshelf = require('../bookshelf');

class Card extends bookshelf.Model {
  get tableName() {
    return 'cards';
  }
  get hasTimestamps() {
    return true;
  }

  users() {
    return this.belongsTo('User', 'assigned_to', 'created_by');
  }

  priorities() {
    return this.belongsTo('Priority', 'priority_id');
  }

  statuses() {
    return this.belongsTo('Status', 'status_id');
  }

}

module.exports = bookshelf.model('Card', Card);