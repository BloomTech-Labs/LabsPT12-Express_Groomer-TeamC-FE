import React, { useContext } from 'react';
import { Layout, Row, Col, Typography, Divider } from 'antd';
import {
  SearchOutlined,
  CheckOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import { LoggedInOptions } from '../LoggedInOptions';
import './landing.scss';

import UserContext from '../../../state/user/userContext';
const { Content } = Layout;
const { Title } = Typography;

function RenderLandingPage(props) {
  // EXAMPLE OF HOW TO IMPORT AND USE CONTEXT
  const userContext = useContext(UserContext);

  const { authState } = userContext;

  return (
    <Layout>
      <div className="banner-ctn">
        <div className="banner-content">
          <h1>Express Groomer</h1>
          {authState.isAuthenticated ? <LoggedInOptions /> : null}
        </div>
      </div>
      <Content className="content-ctn">
        <div className="mid-ctn">
          <Divider>
            <Title className="mid-grid-title" level={2}>
              Get Started
            </Title>
          </Divider>

          <Row className="mid-grid" gutter={40}>
            <Col className="grid-cols" span={8}>
              <SearchOutlined className="landing-icon" />
              <Title level={3}>Search for groomers</Title>
              <p>
                Find highly qualified, professional pet groomers in your area.
              </p>
            </Col>
            <Col className="grid-cols" span={8}>
              <CheckOutlined className="landing-icon" />
              <Title level={3}>Select the services you need</Title>
              <p>
                Every pet professional has different areas of expertise. Pick
                the groomer with the right set of skills for your pet.
              </p>
            </Col>
            <Col className="grid-cols" span={8}>
              <ScheduleOutlined className="landing-icon" />
              <Title level={3}>Book your appointment</Title>
              <p>
                Pick a date, a time, the services you require, and you're all
                set!
              </p>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}
export default RenderLandingPage;
