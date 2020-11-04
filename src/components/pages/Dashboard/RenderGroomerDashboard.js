import React, { useState } from 'react';
import { Layout, Menu, Image, Avatar } from 'antd';
import {
  UserProfile,
  GroomerServices,
  Appointments,
} from './dashboardComponents';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const RenderGroomerDashboard = props => {
  const { avatarUrl, created_at } = props.user;

  const [view, setView] = useState(1);

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
              <SubMenu
                title={
                  <span onClick={() => setView(1)}>Profile and Settings</span>
                }
              >
                <Menu.ItemGroup>
                  <Menu.Item key="contact_info">
                    Update your contact info
                  </Menu.Item>
                  <Menu.Item key="additional_settings">
                    Additional Settings
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>

              <SubMenu title={<span onClick={() => setView(2)}>Services</span>}>
                <Menu.ItemGroup>
                  <Menu.Item key="manage_services">Manage Services</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>

              <SubMenu
                title={<span onClick={() => setView(3)}>Appointments</span>}
              >
                <Menu.ItemGroup>
                  <Menu.Item key="manage_appointments">
                    Manage Appointments
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>

              <SubMenu title={<span onClick={() => setView(4)}>Clients</span>}>
                <Menu.ItemGroup>
                  <Menu.Item key="manage_clients">Manage Clients</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ background: '#FFFFFF', padding: '20px 50px' }}>
              <div>
                {view === 1 && <UserProfile />}
                {view === 2 && <GroomerServices />}
                {view === 3 && <Appointments />}
                {view === 4 && <h1>Clients</h1>}
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
