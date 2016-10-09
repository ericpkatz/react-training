'use strict';
import React from 'react';

class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      message: 'foo'
    };

  }
  render(){
    return (
        <div id="main" className="container-fluid">{ this.state.message }</div>
    );
  }
}

module.exports = Main;
