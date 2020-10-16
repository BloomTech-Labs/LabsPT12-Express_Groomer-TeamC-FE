import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

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
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item key="1" onClick={() => history.push('/')}>
          Home
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
    </Header>
  );
}

export default Navbar;
