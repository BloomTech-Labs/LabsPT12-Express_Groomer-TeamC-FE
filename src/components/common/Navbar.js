import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import smallLogo from '../../images/small-logo.png';

const { Header } = Layout;

function Navbar(props) {
  const { authState, authService } = useOktaAuth();

  const history = useHistory();

  const login = () => {
    history.push('/login');
  };

  const logout = () => {
    authService.logout();
  };

  const profile = () => {
    history.push('/dash');
  };

  return (
    <Header
      style={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Menu mode="horizontal">
        <Menu.Item key="1" onClick={() => history.push('/')}>
          <img src={smallLogo} alt="small-logo" />
        </Menu.Item>
        {!authState.isAuthenticated ? (
          <Menu.Item key="2">Become a groomer</Menu.Item>
        ) : null}
      </Menu>
      {authState.isAuthenticated ? (
        <Menu mode="horizontal">
          <Menu.Item key="3" onClick={() => authService.logout()}>
            Log out
          </Menu.Item>
        </Menu>
      ) : (
        <Menu mode="horizontal">
          <Menu.Item key="3">Sign up</Menu.Item>
          <Menu.Item key="4" onClick={() => history.push('/login')}>
            Log in
          </Menu.Item>
        </Menu>
      )}
    </Header>
  );
}

export default Navbar;

{
  /* <Header style={{ backgroundColor: "white", display: 'flex', justifyContent: 'space-between' }}>
      <Menu mode="horizontal">
        <Menu.Item key="1" onClick={() => history.push('/')}>
          <img src={smallLogo} alt='sml-logo' />
        </Menu.Item>
        {authState.isAuthenticated ? (
          <Menu.Item key="2" onClick={profile}>
            My Dashboard
          </Menu.Item>
        ) : null}
        {authState.isAuthenticated ? (
          <Menu.Item key="3" onClick={logout}>
            Log Out
          </Menu.Item>
        ) : (
            <Menu.Item key="3" onClick={login}>
              Log In
            </Menu.Item>
          )}
      </Menu>
    </Header> */
}
