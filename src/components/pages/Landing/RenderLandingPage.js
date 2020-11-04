import React, { useContext } from 'react';
import { Layout, Row, Col } from 'antd';
import { LoggedInOptions } from '../LoggedInOptions';
import logo from './../../../images/logo_t.png';
import './landing.scss';

// EXAMPLE OF HOW TO IMPORT AND USE CONTEXT
import UserContext from '../../../state/user/userContext';
const { Content } = Layout;

function RenderLandingPage(props) {
  // EXAMPLE OF HOW TO IMPORT AND USE CONTEXT
  const userContext = useContext(UserContext);

  const { authState } = userContext;

  return (
    <Layout>
      <div className="banner-ctn">
        <div className="banner-content">
          <h1>Express Groomer</h1>
          <div className="img-ctn">
            <img src={logo} alt="logo" />
          </div>
          {authState.isAuthenticated ? <LoggedInOptions /> : null}
        </div>
      </div>
      <Content className="content-ctn">
        <div className="mid-ctn">
          <h1>How it works</h1>
          <Row className="mid-grid" gutter={32}>
            <Col className="grid-cols" span={8}>
              <h2>Search for groomers</h2>
              <p>
                Tell us what services you are looking for and we will show you a
                list of highly qualified groomers in your area
              </p>
            </Col>
            <Col className="grid-cols" span={8}>
              <h2>Select an appointment time</h2>
              <p>
                Look at the calendar and select a time that works for you and
                your pet.
              </p>
            </Col>
            <Col className="grid-cols" span={8}>
              <h2>Book your appointment</h2>
              <p>
                Tell us what services you are looking for and we will show you a
                list of highly qualified groomers in your area
              </p>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}
export default RenderLandingPage;
