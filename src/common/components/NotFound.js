import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1 style={{color: '#222', fontSize: '20px', paddingTop: '20px'}} className='text-center'>404</h1>
        <p className='text-center'>Whoops! Sorry it looks like you took a wrong turn</p>
      </div>
    );
  }
}

NotFound.propTypes = {};

export default NotFound;