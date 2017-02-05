import { connect } from "react-redux";
import app from "./page.js";
import {
  GetReq
} from "./actions";

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    GetReq: () => {
      dispatch(GetReq());
    }
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(app);

export default App;