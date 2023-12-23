import React from 'react';
import AuthenticatedLayout from './layout/authenticated-layout';
import { isAuthenticated } from './helpers/utils-auth';
import AuthenticatorLayout from './layout/authenticator-layout';
import BrowserRestrictor from './components/utilsUI/browser-ristrictor';

const isAuth = isAuthenticated();

function App() {
  return (
    <React.Fragment>
      {isAuth ? <AuthenticatedLayout /> : <AuthenticatorLayout />}
      <BrowserRestrictor />
    </React.Fragment>
  );
}

export default App;
