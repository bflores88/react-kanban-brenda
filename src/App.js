import React from 'react';
import './App.css';

import Login from './containers/Login';
import Header from './components/Header';
import Column from './components/Column';

import { connect } from 'react-redux';
import { loadCards, login } from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'KANBAN'
    };

  }

  componentDidMount() {
    this.props.loadCards();
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <Header
              title={this.state.title}
              show={this.state.show}
              handleClose={this.hideNewModal}
              handleOpen={this.showNewModal}
            />
          </header>

          <section className="login-section">
            <Login />
          </section>

          <div className="status-container">
            <Column cardStatus={'IN QUEUE'} cards={this.props.cards} />
            <Column cardStatus={'IN PROGRESS'} cards={this.props.cards} />
            <Column cardStatus={'DONE'} cards={this.props.cards} />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardReducer.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      return dispatch(loadCards());
    },
    login: (e) => {
      return dispatch(login(e));
    },
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
