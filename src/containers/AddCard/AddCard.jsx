import React, { Component } from 'react';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      assigned_to: '',
      created_by: ''
    }
  }

}