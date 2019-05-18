import { LOAD_CARDS, ADD_CARD, DELETE_CARD, EDIT_CARD } from '../actions';

const initialState = {
  cards: [],
  users: [],
  show: false
};

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload] });
    case DELETE_CARD:
      return Object.assign({}, state, { cards: [...action.payload] });
    case EDIT_CARD:
    return Object.assign({}, state, { cards: [...action.payload] });
    case LOAD_CARDS:
      return Object.assign({}, { cards: [...action.payload] });
    default:
      return state;
  }
}

export default cardReducer;
