import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AuthenticatedLayout from './layout/authenticated-layout';
import AuthenticatorLayout from './layout/authenticator-layout';
import { isAuthenticated } from './utils/auth';
import BrowserRestrictor from './components/utilsUI/browser-ristrictor';

const isAuth = isAuthenticated();

function App() {
  return (
    <React.Fragment>
      <Router>
        {isAuth ? <AuthenticatedLayout /> : <AuthenticatorLayout />}
      </Router>
      <BrowserRestrictor />
    </React.Fragment>
  );
}

export default App;
