import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {

    return (
      <div className="card">
        <div className="card-title">{this.props.title}</div>
        <div className="card-priority">Priority:&nbsp;{this.props.priority}</div>
        <div className="card-created-by">Assigned By:&nbsp;{this.props.created_by}</div>

        <div className="card-bottom">
          <div className="edit-delete">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        
          <div className="card-assigned-to">
            {this.props.assigned_to}
          </div>
        </div>
      </div>
    
    )
  }
}

export default Card;

