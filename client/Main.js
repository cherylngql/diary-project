import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import SingleEntry from './SingleEntry';
import AllEntries from './AllEntries';
import Login from './Login';

const Main = () => {
  return (
    <Router>
      <div>
        <Header />
        <section>
          <div id="main">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/entries" component={AllEntries} />
              <Route exact path="/entries/add" component={SingleEntry} />
            </Switch>
          </div>
        </section>
        <footer>

        </footer>
      </div>
    </Router>
  )
}

export default Main
