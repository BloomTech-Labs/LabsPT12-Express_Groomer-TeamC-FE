import React, { useContext } from 'react';
import DashboardContext from '../../../state/dashboard/dashboardContext';
import { Layout, Menu, Image, Avatar } from 'antd';
import {
  ScheduleOutlined,
  IdcardOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import {
  UserProfile,
  GroomerServices,
  Appointments,
  ProfileUpdateForm,
  AddGroomerServiceForm,
  ServiceUpdateForm,
} from './dashboardComponents';

const { Content, Sider } = Layout;

const RenderGroomerDashboard = props => {
  const dashboardContext = useContext(DashboardContext);
  const { dashView, changeView } = dashboardContext;

  const { avatarUrl, created_at } = props.user;

  return (
    <div>
      <Layout style={{ margin: '0 60px 60px 60px' }}>
        <Content style={{ background: '#FFFFFF', margin: '30px 0 30px 0' }}>
          <Avatar
            style={{
              float: 'left',
              background: 'blue',
              minWidth: 120,
              minHeight: 120,
            }}
          >
            <Image width={120} height={120} src={avatarUrl} />
          </Avatar>
          <h3>Member since: {created_at.slice(0, 10)}</h3>
        </Content>
        <Layout>
          <Sider width={300} style={{ background: '#EFF2F6' }}>
            <Menu mode="inline">
              <Menu.Item
                key="1"
                icon={<IdcardOutlined />}
                onClick={() => changeView(1)}
              >
                Profile
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<SolutionOutlined />}
                onClick={() => changeView(2)}
              >
                Your Services
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<ScheduleOutlined />}
                onClick={() => changeView(3)}
              >
                Your Appointments
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ background: '#FFFFFF', padding: '20px 50px' }}>
              <div>
                {dashView === 1 && <UserProfile />}
                {dashView === 2 && <GroomerServices />}
                {dashView === 3 && <Appointments />}
                {dashView === 4 && <h1>Clients</h1>}
                {dashView === 5 && <ProfileUpdateForm />}
                {dashView === 6 && <AddGroomerServiceForm />}
                {dashView === 7 && <ServiceUpdateForm />}
                <form
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}
                ></form>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};
export default RenderGroomerDashboard;
