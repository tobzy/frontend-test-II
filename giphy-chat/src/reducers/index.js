import {combineReducers} from 'redux';
import infoBoxReducer from './infoBoxReducer';
import loadingReducer from './loadingReducer';
import gifChatReducer from './gifsReducer';



const rootReducer = combineReducers({
  infoBox: infoBoxReducer,
  loadingBar: loadingReducer,
  gifs: gifChatReducer,
});

export default rootReducer;