import { connect } from "react-redux";
import app from "./page.js";
import {
  GetReq,
  collapseSidebar
} from "./actions";

const mapStateToProps = (state) => {
  return {
    collapse: state.App.collapse
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    GetReq: () => {
      dispatch(GetReq());
    },
    collapseSidebar: () => {
      dispatch(collapseSidebar());
    }
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(app);

export default App;