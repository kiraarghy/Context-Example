import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Example1 from './routes/example1';
import Example2 from './routes/example2';
import Example3 from './routes/example3';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <Link to="/example1"> Example 1 </Link>
          <Link to="/example2"> Example 2 </Link>
          {/* <Link to="/example3"> Example 3 </Link> */}
        </nav>
        <Route path="/example1" component={Example1} />
        <Route path="/example2" component={Example2} />
        {/* <Route path="/example3" component={Example3} /> */}
      </React.Fragment>
    );
  }
}

export default App;
