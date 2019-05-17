export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';

export function addCard(newCard) {
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
      console.log('*************', card)
      return dispatch({
        type: ADD_CARD,
        payload: card
      });
    });
  }
}

export function deleteCard(cardID) {
  console.log('here i am')
  console.log(cardID);
  return (dispatch) => {
    // call out to server
    return fetch('/api/cards', {
      method: 'DELETE',
      body: JSON.stringify(cardID),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log('****', response)
      return response.json();
    })
    .then((card) => {
      return dispatch({
        type: DELETE_CARD,
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
