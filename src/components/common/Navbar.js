import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import smallLogo from '../../images/small-logo.png';

import UserContext from '../../state/user/userContext';

const { Header } = Layout;

function Navbar(props) {
  const userContext = useContext(UserContext);
  const {
    authState,
    authService,
    getUserProfile,
    userProfile,
    setAccountType,
  } = userContext;
  const [userEmail, setUserEmail] = useState();

  const history = useHistory();

  useEffect(() => {
    if (authState.isAuthenticated && authState.idToken) {
      // console.log(authState.idToken);
      authService.getUser().then(res => {
        setUserEmail(res.email);
      });
    } else if (authState.isAuthenticated && !authState.idToken) {
      authService.logout();
    }
  }, [authState]);

  useEffect(() => {
    if (userEmail) {
      const usersEmail = { email: `${userEmail}` };
      getUserProfile(usersEmail);
    }
  }, [userEmail]);

  useEffect(() => {
    if (Object.keys(userProfile).length > 0) {
      setAccountType();
    }
  }, [userProfile]);

  return (
    <Header
      style={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #D3D3D3',
      }}
    >
      <Menu mode="horizontal">
        <Menu.Item key="1" onClick={() => history.push('/')}>
          <img src={smallLogo} alt="small-logo" />
        </Menu.Item>
        {Object.keys(userProfile).length < 1 ? (
          <Menu.Item key="2">Express Groomer</Menu.Item>
        ) : (
          <Menu.Item key="2">{`Welcome, ${userProfile.name}`}</Menu.Item>
        )}
      </Menu>
      {authState.isAuthenticated ? (
        <Menu mode="horizontal">
          <Menu.Item key="3" onClick={() => history.push('/')}>
            Home
          </Menu.Item>
          <Menu.Item key="4" onClick={() => history.push('/user-dash')}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="5" onClick={() => authService.logout()}>
            Log out
          </Menu.Item>
        </Menu>
      ) : (
        <Menu mode="horizontal">
          <Menu.Item key="3" onClick={() => history.push('/')}>
            Home
          </Menu.Item>
          <Menu.Item key="4" onClick={() => history.push('/login')}>
            Log in
          </Menu.Item>
        </Menu>
      )}
    </Header>
  );
}

export default Navbar;
