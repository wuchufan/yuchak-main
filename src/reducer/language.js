import {
  SWITCH_TO_ENGLISH,
  SWITCH_TO_CHINESE
} from '../actions/types';

const initialState = {
  language:'en'
};

export default function(state = initialState, action){
  const {type} = action;

  switch(type){
    case SWITCH_TO_CHINESE:
    return {
      ...state,
      language:'cn'
    };

    case SWITCH_TO_ENGLISH:
    return{
      ...state,
      language:'en'
    }

    default:
    return state
  }
};
