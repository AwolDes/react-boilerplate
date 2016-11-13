import React, { Component, PropTypes } from 'react';

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
        <h1>Welcome to React Boiler Plate!</h1>
        <h2>Default Helper Classes</h2>
        <div className='loader'></div>
      </div>
    );
  };
}

app.propTypes = {
  GetReq: PropTypes.func
};

export default app;
