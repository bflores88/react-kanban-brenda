import React, { Component, createRef } from 'react';
import './AddCard.css';
import { connect } from 'react-redux';
import { addCard } from '../../actions';
import UserList from '../UserList';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      priority_id: 3,
      status_id: 1,
      assigned_to: 1,
      created_by: 1,
      
    };

    this.titleInputRef = createRef();

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleAssignedChange = this.handleAssignedChange.bind(this);
    this.handleCreatedChange = this.handleCreatedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.titleInputRef.current.focus();
  }

  handleTitleChange(e) {
    const { value } = e.target;
    this.setState({ title: value });
  }

  handleBodyChange(e) {
    const { value } = e.target;
    this.setState({ body: value });
  }

  handlePriorityChange(e) {
    this.setState({ priority_id: e.target.value });
  }

  handleStatusChange(e) {
    this.setState({ status_id: e.target.value });
  }

  handleAssignedChange(e) {
    this.setState({ assigned_to: e.target.value });
  }

  handleCreatedChange(e) {
    this.setState({ created_by: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title, body, priority_id, status_id, created_by, assigned_to } = this.state;

    this.props.addCard({
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to,
    });

    this.setState({
      title: '',
      body: '',
      priority_id: 3,
      status_id: 1,
      assigned_to: 1,
      created_by: 1,
    });

    (this.props.hide)(e);
    
  }

  render() {

    return (
      <div className="add-card-div" id="form-modal" style={{ display: this.props.show } }>
        <form className="new-card-form">
            <h2>Add New Task</h2>
          <div className="form-input">
            <input
              className="title-input"
              type="text"
              placeholder="task"
              ref={this.titleInputRef}
              value={this.state.title}
              onChange={this.handleTitleChange}
              
            />
          </div>

          <div className="form-input">
            <input
              type="text"
              className="body-input"
              placeholder="description"
              value={this.state.body}
              onChange={this.handleBodyChange} />
          </div>
          <br></br>
          <div className="form-selector">
            <div className="selector-title">Priority</div>
            <select name="priority" value={this.state.value} onChange={this.handlePriorityChange} id="priority">
              <option value="3">Low</option>
              <option value="2">Medium</option>
              <option value="1">High</option>
              <option value="4">Blocker</option>
            </select>
          </div>

          <div className="form-selector">
            <div className="selector-title">Status</div>
            <select name="status" value={this.state.value} onChange={this.handleStatusChange} id="priority">
              <option value="1">In Queue</option>
              <option value="2">In Progress</option>
              <option value="3">Done</option>
            </select>
          </div>

          <div className="form-selector">
            <div className="selector-title">Assigned to</div>
            <select name="assigned_to" value={this.state.value} onChange={this.handleAssignedChange} id="priority">
              <UserList />
            </select>
          </div>

          <div className="form-selector">
            <div className="selector-title">Created by</div>
            <select name="created_by" value={this.state.value} onChange={this.handleCreatedChange} id="priority">
              <UserList />
            </select>
          </div>
          <br></br>
          <div className="form-submit">
            <button className="edit-form-button" onClick={this.handleSubmit}>Submit</button>
          </div>
          <br></br>
          <div className="form-submit">
            <button className="edit-form-button" onClick={this.props.hide}>Close</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (newCard) => {
      dispatch(addCard(newCard));
    },
  };
};

AddCard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCard);

export default AddCard;
