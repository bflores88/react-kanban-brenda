import React, { Component } from 'react';
import './Card.css';
import { connect } from 'react-redux';
import { deleteCard } from '../../actions';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.deleteCard({ id: e.target.value });
  }

  render() {

    if (this.props.status === "IN QUEUE") {
      
      return  (

        <div className="card" style={{backgroundColor: "#FDF1DE", borderColor: "#FAC370"}}>
          <div className="card-title">{this.props.title}</div>
          <div className="card-priority">Priority:&nbsp;{this.props.priority}</div>
          <div className="card-created-by">Assigned By:&nbsp;{this.props.created_by}</div>
  
          <div className="card-bottom">
            <div className="edit-delete">
              <button>Edit</button>
  
              <button type="submit" value={this.props.id} onClick={this.handleDelete}>
                Delete
              </button>
            </div>
  
            <div className="card-assigned-to">{this.props.assigned_to}</div>
          </div>
        </div>
      );
    }

    if (this.props.status === "IN PROGRESS") {
      
      return  (

        <div className="card" style={{backgroundColor: "#E5FDCA", borderColor: "#9AD856"}}>
          <div className="card-title">{this.props.title}</div>
          <div className="card-priority">Priority:&nbsp;{this.props.priority}</div>
          <div className="card-created-by">Assigned By:&nbsp;{this.props.created_by}</div>
  
          <div className="card-bottom">
            <div className="edit-delete">
              <button>Edit</button>
  
              <button type="submit" value={this.props.id} onClick={this.handleDelete}>
                Delete
              </button>
            </div>
  
            <div className="card-assigned-to">{this.props.assigned_to}</div>
          </div>
        </div>
      );
    }
    return (

      <div className="card" style={{backgroundColor: "#F7F8FC", borderColor: "#C4CAD7"}}>
        <div className="card-title">{this.props.title}</div>
        <div className="card-priority">Priority:&nbsp;{this.props.priority}</div>
        <div className="card-created-by">Assigned By:&nbsp;{this.props.created_by}</div>

        <div className="card-bottom">
          <div className="edit-delete">
            <button>Edit</button>

            <button type="submit" value={this.props.id} onClick={this.handleDelete}>
              Delete
            </button>
          </div>

          <div className="card-assigned-to">{this.props.assigned_to}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (cardID) => {
      dispatch(deleteCard(cardID));
    },
  };
};

Card = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);

export default Card;
