export const ADD_CARD = 'ADD_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';
export const LOAD_USERS = 'LOAD_USERS';

export function addCard(newCard) {
  console.log('i got here')
  return (dispatch) => {
    // call out to server
    return fetch('/api/cards', {
      method: 'POST',
      body: JSON.stringify(newCard),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((card) => {
      console.log(card);
      return dispatch({
        type: ADD_CARD,
        payload: card
      });
    });
  }
}

export const loadCards = () => {
  return (dispatch) => {
    return fetch('/api/cards')
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        console.log('cards', cards)
        return dispatch({
          type: LOAD_CARDS,
          payload: cards
      })
    })
  }
}

export const loadUsers = () => {
  console.log('*************')
  return (dispatch) => {
    return fetch('/api/users')
      .then((response) => {
        console.log('response******', response)
        return response.json();
      })
      .then((users) => {
        console.log('users****', users)
        return dispatch({
          type: LOAD_USERS,
          payload: users
        })
    })
  }
}