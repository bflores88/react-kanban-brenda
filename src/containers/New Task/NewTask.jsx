import React, { Component } from 'react';


class NewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleNewTask() {
    let getModal = document.getElementsByClassName("add-card-div")
    getModal[0].style.display = 'block';
  }

  render() {
    return (
      <div className="newTaskDiv" onClick={this.handleNewTask}>
        + NEW TASK
      </div>
    )
  }
}


export default NewTask;