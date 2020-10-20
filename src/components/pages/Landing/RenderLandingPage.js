import React, { useContext } from 'react';
import { Layout, Row, Col, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Navbar } from '../../common';
import logo from './../../../images/logo_t.png';
import './landing.scss';

// EXAMPLE OF HOW TO IMPORT AND USE CONTEXT
import ClientContext from '../../../state/client/clientContext';

const { Footer, Content } = Layout;

function RenderLandingPage(props) {
  // EXAMPLE OF HOW TO IMPORT AND USE CONTEXT
  // const clientContext = useContext(ClientContext);
  // const { client, groomers, getClient, searchGroomers } = clientContext;

  return (
    <Layout>
      <Navbar />
      <div className="banner-ctn">
        <div className="banner-content">
          <h1>Express Groomer</h1>
          <div className="img-ctn">
            <img src={logo} alt="logo" />
          </div>
          <Link to="/">
            <Button size="large" shape="round" className="search-btn">
              Find the perfect groomer for your pet!
            </Button>
          </Link>
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
