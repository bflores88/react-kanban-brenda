import React, { Component } from 'react';
import './Card.css';
import { connect } from 'react-redux';
import { deleteCard } from '../../actions';
import EditCard from '../EditCard';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      editDisplay: "none"
    };

    this.showEdit = this.showEdit.bind(this);
    this.hideEdit = this.hideEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  showEdit(e) {
    e.preventDefault();
    this.setState({editDisplay: "block"})
  }

  hideEdit(e) {
    e.preventDefault();
    this.setState({editDisplay: "none"})
  }


  handleDelete(e) {
    this.props.deleteCard({ id: parseInt(e.target.value) });
  }

  render() {

    if (this.props.status === "IN QUEUE") {
      
      return (
        <>
        <div className="card" style={{backgroundColor: "#FDF1DE", borderColor: "#FAC370"}}>
          <div className="card-title">{this.props.title}</div>
          <div className="card-priority">Priority:&nbsp;{this.props.priority}</div>
          <div className="card-created-by">Assigned By:&nbsp;{this.props.created_by}</div>
  
          <div className="card-bottom">
            <div className="edit-delete">
              <button className="edit-delete-button" value={this.props.id} style={{ color: "#FAC370" }} onClick={this.showEdit}>
                Edit
              </button>
              <button className="edit-delete-button" style={{color: "#FAC370"}} type="submit" value={this.props.id} onClick={this.handleDelete}>
                Delete
              </button>
            </div>
  
            <div className="card-assigned-to">{this.props.assigned_to}</div>
          </div>
        </div>
          <EditCard
          id={this.props.id}
          title={this.props.title}
          body={this.props.body}
          priority_id={this.props.priority_id}
          status_id={this.props.status_id}
          assigned_to={this.props.assignedID}
          created_by={this.props.createdID}
          hideEdit={this.hideEdit}
          editDisplay={this.state.editDisplay}
            />
        </>
      );
    }

    if (this.props.status === "IN PROGRESS") {
      
      return (
        <>
        <div className="card" style={{backgroundColor: "#E5FDCA", borderColor: "#9AD856"}}>
          <div className="card-title">{this.props.title}</div>
          <div className="card-priority">Priority:&nbsp;{this.props.priority}</div>
          <div className="card-created-by">Assigned By:&nbsp;{this.props.created_by}</div>
  
          <div className="card-bottom">
            <div className="edit-delete">
            <button className="edit-delete-button" value={this.props.id} style={{ color: "#9AD856" }} onClick={this.showEdit}>
                Edit
              </button>
             <button className="edit-delete-button" style={{color: "#9AD856"}} type="submit" value={this.props.id} onClick={this.handleDelete}>
                Delete
              </button>
            </div>
  
            <div className="card-assigned-to">{this.props.assigned_to}</div>
          </div>
          </div>
          <EditCard
          id={this.props.id}
          title={this.props.title}
          body={this.props.body}
          priority_id={this.props.priority_id}
          status_id={this.props.status_id}
          assigned_to={this.props.assignedID}
          created_by={this.props.createdID}
          hideEdit={this.hideEdit}
          editDisplay={this.state.editDisplay}
            />
        </>
      );
    }
    return (
      <>
      <div className="card" style={{backgroundColor: "#F7F8FC", borderColor: "#C4CAD7"}}>
        <div className="card-title">{this.props.title}</div>
        <div className="card-priority">Priority:&nbsp;{this.props.priority}</div>
        <div className="card-created-by">Assigned By:&nbsp;{this.props.created_by}</div>

        <div className="card-bottom">
          <div className="edit-delete">
          <button className="edit-delete-button" value={this.props.id} style={{ color: "#C4CAD7" }} onClick={this.showEdit}>
                Edit
                     
              </button>
            <button className="edit-delete-button" style={{color: "#C4CAD7"}} type="submit" value={this.props.id} onClick={this.handleDelete}>
              Delete
            </button>
          </div>

          <div className="card-assigned-to">{this.props.assigned_to}</div>
        </div>
        </div>
        <EditCard
          id={this.props.id}
          title={this.props.title}
          body={this.props.body}
          priority_id={this.props.priority_id}
          status_id={this.props.status_id}
          assigned_to={this.props.assignedID}
          created_by={this.props.createdID}
          hideEdit={this.hideEdit}
          editDisplay={this.state.editDisplay}
            />
        </>
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
