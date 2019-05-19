import { LOAD_CARDS, ADD_CARD, EDIT_CARD, DELETE_CARD, LOAD_USERS} from '../actions';

const initialState = {
  cards: [],
  users: [],
};

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: [...action.payload] });
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload] });
    case EDIT_CARD:
      return Object.assign({}, state, { cards: [...action.payload] });
    case DELETE_CARD:
      return Object.assign({}, state, { cards: [...action.payload] });
    case LOAD_USERS:
      return Object.assign({}, state, { users: [...action.payload] });
    default:
      return state;
  }
}

export default cardReducer;
