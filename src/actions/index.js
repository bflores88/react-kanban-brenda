export const LOAD_CARDS = 'LOAD_CARDS';
export const LOAD_USERS = 'LOAD_USERS';


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