export const LOAD_CARDS = 'LOAD_CARDS';

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