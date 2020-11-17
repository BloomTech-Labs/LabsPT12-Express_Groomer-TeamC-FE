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
    fetchClientProfile,
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
      fetchClientProfile(userProfile.id);
    }
  }, [userProfile]);

  return (
    <div
      style={{
        borderBottom: '1px solid lightgray',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Header
        style={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '0 auto !important',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        <Menu mode="horizontal" style={{ border: 'none' }}>
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
          <Menu mode="horizontal" style={{ border: 'none' }}>
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
    </div>
  );
}

export default Navbar;
