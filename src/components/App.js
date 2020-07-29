import React from 'react';
import Store from './Store';

export default class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <Store props={this.props}/>
      </div>
    );
  }
}
