import { LOAD_CARDS, ADD_CARD, EDIT_CARD, DELETE_CARD, LOAD_USERS, LOGIN, LOGOUT } from '../actions';

const initialState = {
  cards: [],
  users: [],
  auth: false,
};

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: [...action.payload] });
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload] });
    case EDIT_CARD:
      const filtered = state.cards.filter((card) => {
        return card.id !== action.payload.id;
      });
      state.cards = filtered;
      return Object.assign({}, state, { cards: [...filtered, action.payload] });
    case DELETE_CARD:
      return Object.assign({}, state, { cards: [...action.payload] });
    case LOAD_USERS:
      return Object.assign({}, state, { users: [...action.payload] });
    case LOGIN:
      return Object.assign({}, state, { auth: action.payload });
    case LOGOUT:
      return Object.assign({}, state, { auth: action.payload });
    default:
      return state;
  }
}

export default cardReducer;
