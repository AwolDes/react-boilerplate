import {SENDING_GET, SUCCESSFUL_GET, FAILED_GET} from './actions';

const initialState = {

};

export default function App(state = initialState, action) {
  switch (action.type) {
    case (SENDING_GET):
      return Object.assign({}, state, {
        // state objects
      });

    case (SUCCESSFUL_GET):
      return Object.assign({}, state, {
        // state objects
      });

    case (FAILED_GET):
      return Object.assign({}, state, {
        // state objects
      });
      
    default:
      return state;
  }
}