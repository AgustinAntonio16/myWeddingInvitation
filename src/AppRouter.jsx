import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import CeremonyLocation from './components/CeremonyMap';
import ReceptionLocation from './components/ReceptionLocation';

const AppRouter = () => {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/ceremony-location" component={CeremonyLocation} />
        <Route path="/reception-location" component={ReceptionLocation} />
    </Router>
  );
};

export default AppRouter;
