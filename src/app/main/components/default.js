import React, { Component, PropTypes } from "react";

class Default extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Welcome to React Boiler Plate!</h1>
        <h2>Default Helper Classes</h2>
        <div className="loader"></div>
      </div>
    );
  };
}

Default.propTypes = {

};

Default.defaultProps = {

};

export default Default;