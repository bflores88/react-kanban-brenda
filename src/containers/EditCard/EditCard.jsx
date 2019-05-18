import React, { Component, createRef } from 'react';
import '../AddCard/AddCard.css';
import { connect } from 'react-redux';
import { editCard } from '../../actions';
import './EditCard.css';

class EditCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      assigned_to: '',
      created_by: '',
    };

    this.titleInputRef = createRef();

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleNewTitle = this.handleNewTitle.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleAssignedChange = this.handleAssignedChange.bind(this);
    this.handleCreatedChange = this.handleCreatedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      body: this.props.body,
      priority_id: this.props.priority_id,
      status_id: this.props.status_id,
      assigned_to: this.props.assigned_to,
      created_by: this.props.created_by
    })
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

    this.setState({
      id: '',
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      assigned_to: '',
      created_by: '',
    });

  }

  handleCloseModal() {
    let closeDiv = document.getElementsByClassName("edit-card-div")
    for (let i = 0; i < closeDiv.length; i++){
      closeDiv[i].style.display = "none";
    }
    
  }

  render() {
    return (
      <div className="edit-card-div" id={this.props.id} style={{ display: "none" }}>
        <form className="new-card-form">
            <h2>Edit Task</h2>
          <div className="form-input">
            <input
              className="title-input"
              type="text"
              placeholder={this.props.title}
              ref={this.titleInputRef}
              value={this.state.title}
              onChange={this.handleNewTitle}
              
            />
          </div>

          <div className="form-input">
            <input
              type="text"
              className="body-input"
              placeholder={this.props.body}
              value={this.state.body}
              onChange={this.handleBodyChange} />
          </div>
          <br></br>
          <div className="form-selector">
            <div className="selector-title">Priority</div>
            <select name="priority" value={this.state.priority_id} onChange={this.handlePriorityChange} id="priority">
              <option value="3">Low</option>
              <option value="2">Medium</option>
              <option value="1">High</option>
              <option value="4">Blocker</option>
            </select>
          </div>

          <div className="form-selector">
            <div className="selector-title">Status</div>
            <select name="status" value={this.state.status_id} onChange={this.handleStatusChange} id="priority">
              <option value="1">In Queue</option>
              <option value="2">In Progress</option>
              <option value="3">Done</option>
            </select>
          </div>

          <div className="form-selector">
            <div className="selector-title">Assigned to</div>
            <select name="assigned_to" value={this.state.assigned_to} onChange={this.handleAssignedChange} id="priority">
              <option value="1">Ginger Spice</option>
              <option value="2">Baby Spice</option>
              <option value="3">Scary Spice</option>
              <option value="4">Posh Spice</option>
              <option value="4">Sporty Spice</option>
            </select>
          </div>

          <div className="form-selector">
            <div className="selector-title">Created by</div>
            <select name="created_by" value={this.state.created_by} onChange={this.handleCreatedChange} id="priority">
              <option value="1">Ginger Spice</option>
              <option value="2">Baby Spice</option>
              <option value="3">Scary Spice</option>
              <option value="4">Posh Spice</option>
              <option value="4">Sporty Spice</option>
            </select>
          </div>
          <br></br>
          <div className="form-submit">
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
          <br></br>
          <div className="form-submit">
            <button onClick={this.handleCloseModal}>Close</button>
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
