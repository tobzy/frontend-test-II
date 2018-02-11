import {
  LOADING_FALSE,
  LOADING_TRUE
} from '../actions/types';
let initialState = {
  loading: false,
}

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TRUE:
      return {
        loading: true,
      }
    case LOADING_FALSE:
      return {
        loading: false,
      }

    default:
      return state;
  }
}

export default loadingReducer;
