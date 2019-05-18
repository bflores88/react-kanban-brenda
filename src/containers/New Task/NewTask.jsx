import React, { Component } from 'react';
import AddCard from '../AddCard';

class NewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: 'none'
    };

    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleNewTask(e) {
    e.preventDefault();
    this.setState({show: "block"})
  }

  handleCloseModal(e) {
    e.preventDefault();
    this.setState({show: "none"})
  }

  render() {
    return (
      <>
      <div className="newTaskDiv" onClick={this.handleNewTask}>
        + NEW TASK
        
      </div>
        <AddCard show={this.state.show} hide={this.handleCloseModal} />
        </>
    );
  }
}


export default NewTask;
