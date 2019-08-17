import * as types from './actionsTypes';

const initialState = [];

const reducer = (state = initialState, actions) => {
  switch(actions.type){
    case types.ADD:
      return state;

    default: 
      return state;
  }
}

export default reducer;