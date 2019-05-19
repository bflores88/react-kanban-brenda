export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const LOAD_USERS = 'LOAD_USERS';

export const loadCards = () => {
  return (dispatch) => {
    return fetch('/api/cards')
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        return dispatch({
          type: LOAD_CARDS,
          payload: cards,
        });
      });
  };
};

export function addCard(newCard) {
  return (dispatch) => {
    // call out to server
    return fetch('/api/cards', {
      method: 'POST',
      body: JSON.stringify(newCard),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((card) => {
        return dispatch({
          type: ADD_CARD,
          payload: card,
        });
      });
  };
}

export function editCard(editedCard) {
  return (dispatch) => {
    // call out to server
    return fetch(`/api/cards/${editedCard.id}`, {
      method: 'PUT',
      body: JSON.stringify(editedCard),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((card) => {
        return dispatch({
          type: EDIT_CARD,
          payload: card,
        });
      });
  };
}

export function deleteCard(cardID) {
  return (dispatch) => {
    // call out to server
    return fetch('/api/cards', {
      method: 'DELETE',
      body: JSON.stringify(cardID),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((card) => {
        return dispatch({
          type: DELETE_CARD,
          payload: card,
        });
      });
  };
}

export const loadUsers = () => {
  return (dispatch) => {
    return fetch('/api/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        return dispatch({
          type: LOAD_USERS,
          payload: users,
        });
      });
  };
};
