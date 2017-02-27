import React, { Component, PropTypes } from "react";
import SideBar from "../../common/components/ui/SideBar";

class app extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  componentDidMount() {
    // send your get
  }

  render() {


    return (
      <div>
        <SideBar collapseSidebar={this.props.collapseSidebar} collapse={this.props.collapse} />
        <div id="contentWrapper" >
          <div id="Wrapper">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  };
}

app.propTypes = {
  GetReq: PropTypes.func,
  collapseSidebar: PropTypes.func.isRequired,
  collapse: PropTypes.bool.isRequired,
  children: PropTypes.func
};

export default app;
