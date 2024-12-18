import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AvailablePollsPage from './pages/AvailablePollsPage';
import CreatePollPage from './pages/CreatePollPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/create-poll" component={CreatePollPage} />
        <Route path="/available-polls" component={AvailablePollsPage} />
      </Switch>
    </Router>
  );
};

export default App;
