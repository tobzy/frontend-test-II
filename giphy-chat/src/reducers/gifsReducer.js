import {LOAD_GIF_DATA} from '../actions/types';
let initialState = {
  gifChats: []
}

const gifChatReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD_GIF_DATA:
      let gifs = [...state.gifChats];

      gifs.push({
        image:action.payload.images.fixed_height_downsampled,
        url:action.payload.bitly_url
      })
      return {
        gifChats:gifs
      }
    default:
      return state;
  }
}

export default gifChatReducer;
