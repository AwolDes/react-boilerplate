import {GetAPI} from "../../modules/API";

export const SENDING_GET = "SENDING_GET";
export const FAILED_GET = "FAILED_GET";
export const SUCCESSFUL_GET = "SUCCESSFUL_GET";

export const GetReq = () => {
  return dispatch => {
    dispatch({type: SENDING_GET});
    return GetAPI("some_url")
      .then(
        data => {
          // If getting shortlist
          if ("something" in data) {
            dispatch({ type: SUCCESSFUL_GET, data });
          } else {
            dispatch({ type: FAILED_GET, data });
          }
        },
        data => dispatch({ type: FAILED_GET, data })
      );
  };
};