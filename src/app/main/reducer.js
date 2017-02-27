import {SENDING_GET, SUCCESSFUL_GET, FAILED_GET, TOGGLE_MENU, NAVBAR_CACHE} from "./actions";

const initialState = {
  collapse: false
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

    case TOGGLE_MENU:
      localStorage.setItem(NAVBAR_CACHE, (state.collapse !== true));
      return Object.assign({}, state, {collapse: (state.collapse !== true)});
      
    default:
      return state;
  }
}