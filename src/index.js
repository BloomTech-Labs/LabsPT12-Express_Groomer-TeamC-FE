import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';

import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import 'antd/dist/antd.less';

import { LandingPage } from './components/pages/Landing';
import { Navbar } from './components/common';
import { LoginPage } from './components/pages/Login';
import { config } from './utils/oktaConfig';
import { SearchResult } from './components/pages/SearchResult';
import { GroomerProfile } from './components/pages/GroomerProfileView';
import { Dashboard } from './components/pages/Dashboard';
import { UpdateProfile } from './components/pages/UpdateProfile';
import UserState from './state/user/UserState';
import SearchState from './state/search/SearchState';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <SearchState>
        <UserState>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/implicit/callback" component={LoginCallback} />
            <SecureRoute
              path="/search-result-page/:city"
              component={SearchResult}
            />
            <SecureRoute
              path="/groomer-profile/:id"
              component={GroomerProfile}
            />
            <SecureRoute exact path="/user-dash" component={Dashboard} />
            <SecureRoute
              exact
              path="/update-profile"
              component={UpdateProfile}
            />
          </Switch>
        </UserState>
      </SearchState>
    </Security>
  );
}
