import {axiosClient} from '../tools/axiosClient.js';

import {getGiphyTranslate} from '../config/url';
import {giphyCredentials} from '../config/giphyApiConfig'
import {showInfoBox} from '../components/sharedComponents/infoBox/actions';

import {
  LOAD_GIF_DATA,
  LOADING_TRUE,
  LOADING_FALSE
} from './types';

export function fetchGif(input) {
  return function (dispatch) {

    if(!input.trim().startsWith('/giphy')){
      dispatch(showInfoBox('Start command with "/giphy"', 'error', 3000))
      return
    }
    dispatch(showLoading())
    axiosClient.get(getGiphyTranslate, {
      params:{
        api_key:giphyCredentials.key,
        s:input.trim().split("/giphy")[1]
      }
    })
      .then(response => {

        if(response.data.meta.msg === "OK"){
          if(Array.isArray(response.data.data)){
            dispatch(showInfoBox('No Gif Available', 'error', 3000))
          }else{
            dispatch(loadGifData(response.data.data))
          }
        }

        dispatch(hideLoading())
      })
      .catch((error) => {
        dispatch(showInfoBox('Error! Try again', 'error', 3000))
        dispatch(hideLoading())
        return error
      });
  }
}

export function showLoading() {
  return {
    type: LOADING_TRUE
  }
}
export function hideLoading() {
  return {
    type: LOADING_FALSE
  }
}
export function loadGifData(data) {
  return {
    type: LOAD_GIF_DATA,
    payload:data
  }
}