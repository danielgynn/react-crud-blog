import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Posts from './pages/Posts';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
