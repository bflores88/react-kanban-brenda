import React from 'react';
import './App.css';

import Header from './components/Header';
import Column from './components/Column';
import User from './components/User';

// import Card from './containers/Card';

import { connect } from 'react-redux';
import { loadCards, loadUsers } from './actions';
import UserList from './containers/UserList';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'KANBAN',
    }
  }

  componentDidMount() {
    return this.props.loadCards();
  }

  render() {
    const cards = this.props.cards;
    const queued = cards.filter(card => {
      return card.status_id === 1;
    });
    const progress = cards.filter(card => {
      return card.status_id === 2;
    });
    const done = cards.filter(card => {
      return card.status_id === 3;
    })
    
    return (
      <div className="App">
        <header className="App-header">
          <Header title={this.state.title} />
        </header>

        <div className="status-container">
        <Column status={"IN QUEUE"}
            cards={queued} />
        <Column status={"IN PROGRESS"}
            cards={progress} />
        <Column status={"DONE"}
          cards={done} />
        </div>


        <UserList />

        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardReducer.cards,
    users: state.cardReducer.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => {
      return dispatch(loadCards());
    },
    loadUsers: () => {
      return dispatch(loadUsers());
    }

  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
