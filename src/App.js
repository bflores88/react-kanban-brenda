import React from 'react';
import './App.css';

import Header from './components/Header';
import Column from './components/Column';
import AddCard from './containers/AddCard';


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
    this.props.loadCards();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Header title={this.state.title} />
        </header>

        <div className="status-container">
          <Column cardStatus={'IN QUEUE'} cards={this.props.cards} />
          <Column cardStatus={'IN PROGRESS'} cards={this.props.cards} />
          <Column cardStatus={'DONE'} cards={this.props.cards}/>
        </div>

        <AddCard />
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardReducer.cards,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => {
      return dispatch(loadCards());
    }

  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
