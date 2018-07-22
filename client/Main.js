import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header'
import SingleEntry from './SingleEntry'
import AllEntries from './AllEntries';

const Main = () => {
  return (
    <Router>
      <div>
        <Header />
        <section>
          <div id="entry">
            <Switch>
              <Route exact path="/" component={SingleEntry} />
              <Route exact path="/entries" component={AllEntries} />
            </Switch>
          </div>
          <div id='overview'> 
            This will be where past entries and different journal collections can be accessed.
          </div>
        </section>
        <footer>

        </footer>
      </div>
    </Router>
  )
}

export default Main
