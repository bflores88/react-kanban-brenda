import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

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
    console.log(this.state);
    e.preventDefault();

    console.log('am i here??')

    const {
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to
    } = this.state;


    this.props.addCard({
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to
    })

    this.setState({
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      assigned_to: '',
      created_by: '',
    })

    this.titleInputRef.current.focus();
  }

  render() {
    return (
      <form className="new-card-form">
        <div className="form-input">
          <input
            type="text"
            placeholder="title"
            ref={this.titleInputRef}
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>

        <div className="form-input">
          <input type="text" placeholder="body" value={this.state.body} onChange={this.handleBodyChange} />
        </div>

        <div className="form-selector">
          <p>Priority</p>
          <select name="priority" value={this.state.value} onChange={this.handlePriorityChange} id="priority">
            <option value="3">Low</option>
            <option value="2">Medium</option>
            <option value="1">High</option>
            <option value="4">Blocker</option>
          </select>
        </div>

        <div className="form-selector">
          <p>Status</p>
          <select name="status" value={this.state.value} onChange={this.handleStatusChange} id="priority">
            <option value="1">In Queue</option>
            <option value="2">In Progress</option>
            <option value="3">Done</option>
          </select>
        </div>

        <div className="form-selector">
          <p>Assigned To</p>
          <select name="assigned_to" value={this.state.value} onChange={this.handleAssignedChange} id="priority">
            <option value="1">Ginger Spice</option>
            <option value="2">Baby Spice</option>
            <option value="3">Scary Spice</option>
            <option value="4">Posh Spice</option>
            <option value="4">Sporty Spice</option>
          </select>
        </div>

        <div className="form-selector">
          <p>Created By</p>
          <select name="created_by"  value={this.state.value} onChange={this.handleCreatedChange} id="priority">
            <option value="1">Ginger Spice</option>
            <option value="2">Baby Spice</option>
            <option value="3">Scary Spice</option>
            <option value="4">Posh Spice</option>
            <option value="4">Sporty Spice</option>
          </select>
        </div>

        <div className="form-submit" onClick={this.handleSubmit}>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (newCard) => {
      dispatch(addCard(newCard));
    }
  };
}

AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);

export default AddCard;
