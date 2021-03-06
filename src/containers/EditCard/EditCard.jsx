import React, { Component, createRef } from 'react';
import '../AddCard/AddCard.css';
import { connect } from 'react-redux';
import { editCard } from '../../actions';
import './EditCard.css';
import UserList from '../UserList';

class EditCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      body: this.props.body,
      priority_id: this.props.priority_id,
      status_id: this.props.status_id,
      assigned_to: this.props.assigned_to,
      created_by: this.props.created_by,
      show: 'none',
    };

    this.titleInputRef = createRef();

    this.handleNewTitle = this.handleNewTitle.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleAssignedChange = this.handleAssignedChange.bind(this);
    this.handleCreatedChange = this.handleCreatedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({
        id: this.props.id,
        title: this.props.title,
        body: this.props.body,
        priority_id: this.props.priority_id,
        status_id: this.props.status_id,
        assigned_to: this.props.assigned_to,
        created_by: this.props.created_by,
        show: 'none',
      });
    }
  }

  handleNewTitle(e) {
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

    const { id, title, body, priority_id, status_id, created_by, assigned_to } = this.state;

    this.props.editCard({
      id,
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to,
    });

    this.props.hideEdit(e);
  }

  render() {
    return (
      <div className="edit-card-div" style={{ display: this.props.editDisplay }}>
        <form className="new-card-form">
          <h2>Edit Task</h2>
          <div className="form-input">
            <input
              className="title-input"
              type="text"
              maxLength="200"
              placeholder={this.state.title}
              ref={this.titleInputRef}
              value={this.state.title}
              onChange={this.handleNewTitle}
            />
          </div>

          <div className="form-input">
            <input
              type="text"
              className="body-input"
              maxLength="500"
              placeholder={this.state.body}
              value={this.state.body}
              onChange={this.handleBodyChange}
            />
          </div>
          <br />
          <div className="form-selector">
            <div className="selector-title">Priority</div>
            <select name="priority" value={this.state.priority_id} onChange={this.handlePriorityChange}>
              <option value="3">Low</option>
              <option value="2">Medium</option>
              <option value="1">High</option>
              <option value="4">Blocker</option>
            </select>
          </div>

          <div className="form-selector">
            <div className="selector-title">Status</div>
            <select name="status" value={this.state.status_id} onChange={this.handleStatusChange}>
              <option value="1">In Queue</option>
              <option value="2">In Progress</option>
              <option value="3">Done</option>
            </select>
          </div>

          <div className="form-selector">
            <div className="selector-title">Assigned to</div>
            <select
              name="assigned_to"
              value={this.state.assigned_to}
              onChange={this.handleAssignedChange}
            >
              <UserList />
            </select>
          </div>

          <div className="form-selector">
            <div className="selector-title">Created by</div>
            <select name="created_by" value={this.state.created_by} onChange={this.handleCreatedChange}>
              <UserList />
            </select>
          </div>
          <br />
          <div className="form-submit">
            <button className="edit-form-button" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
          <div className="form-submit">
            <button className="edit-form-button close-form-button" value={this.props.id} onClick={this.props.hideEdit}>
              Close
            </button>
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
    editCard: (editedCard) => {
      dispatch(editCard(editedCard));
    },
  };
};

EditCard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditCard);

export default EditCard;
