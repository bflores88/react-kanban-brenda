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
    return (
      <div className="card">
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
