import {
  LOAD_CARDS,
  LOAD_USERS
} from '../actions';

const initialState = {
  cards: [],
  users: []
};


function cardReducer(state = initialState, action){
  switch(action.type){
    case LOAD_CARDS:
      return Object.assign({}, { cards: [...action.payload] })
    case LOAD_USERS:
      return Object.assign({}, { users: [...action.payload] })
    default:
      return state;
  }
}

export default cardReducer;