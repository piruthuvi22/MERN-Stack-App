import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import { CreateJob } from './components/create-job.component';
import { EditJob } from './components/edit-job.component'
import { ListJob } from './components/list-job.component'

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-info bg-dark">
        <Link to="/" className="navbar-brand">Jobs</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/create-job" className="nav-link">Add</Link>
            </li>

            <li className="nav-item active">
              <Link to="/jobs" className="nav-link">Show All</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route exact path='/' component={CreateJob} />
        <Route exact path="/create-job" component={CreateJob} />
        <Route exact path="/edit-job/:id" component={EditJob} />
        <Route exact path="/jobs" component={ListJob} />
      </Switch>
    </Router >

  )
}

export default App;
