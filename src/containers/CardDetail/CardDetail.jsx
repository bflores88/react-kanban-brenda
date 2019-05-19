import React, { Component } from 'react';
import './CardDetail.css';

class CardDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="card-detail-modal" style={{ display: this.props.display }}>
        <div className="cardDetail">
          <div className="cardDetail-task">
            <h1>{this.props.title}</h1>
          </div>
          <br />
          <div className="cardDetail-description">
            <h2>{this.props.body}</h2>
          </div>
          <br></br>
          <div className="cardDetail-assignments">
            <h4>Assigned To:&nbsp;{this.props.assignedTo}</h4>
            <h4>Priority:&nbsp;{this.props.priority}</h4>
            <h4>Current Status:&nbsp;{this.props.status}</h4>
            <br />
            <h4>Created By:&nbsp;{this.props.createdBy}</h4>
          </div>
          <div className="form-submit">
            <button className="edit-form-button" onClick={this.props.hide}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardDetail;
