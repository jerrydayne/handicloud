import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Dashboard';
import Messages from './pages/Messages';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/messages" component={Messages} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
