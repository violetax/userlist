import React from 'react'; // convention to add a blank line between functionality imports and component imports
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './shared/Header';
import HomePage from './home/HomePage';
import LoginPage from './account/LoginPage';
import ProfilePage from './account/ProfilePage';

export default function Template(props) {
  return (
    <Router>
      <div className="wrapper">
        <Header username="anonymous" />
        <p>{props.progress}</p>
        <section className="page-content container-fluid">
          <Route exact path="/account/login" component={LoginPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/account/profile/:id" component={ProfilePage} />
        </section>
      </div>  
    </Router>
  );
}
