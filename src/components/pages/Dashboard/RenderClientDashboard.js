import React from 'react';
import { useHistory } from 'react-router-dom';
import ClientOptions from '../LoggedInOptions/ClientOptions';

import { Layout, Menu, Image, Avatar } from 'antd';
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const RenderClientDashboard = props => {
  const { name, country, email, avatarUrl, created_at } = props.user;

  const history = useHistory();

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
          <h3>
            {' '}
            <span>Member since: {created_at.slice(0, 10)}</span>
          </h3>
        </Content>
        <Layout>
          <Sider width={300} style={{ background: '#FFFFFF' }}>
            <Menu mode="inline">
              <SubMenu title={<spam>Profile and Settings</spam>}>
                <Menu.ItemGroup>
                  <Menu.Item key="contact_info">
                    Update your contact info
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>

              <SubMenu title={<spam>Pets</spam>}>
                <Menu.ItemGroup>
                  <Menu.Item key="manage_pet">Manage Pets</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>

              <SubMenu title={<spam>Groomers</spam>}>
                <Menu.ItemGroup>
                  <Menu.Item key="manage_appointment">
                    Manage Groomers
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ background: '#BDECBE', padding: '20px 50px' }}>
              <div>
                <form
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}
                >
                  <h3>Placeholder for pet pictures</h3>
                  <h3>Placeholder for pet pictures</h3>
                </form>
              </div>
            </Content>
          </Layout>
          <Content style={{ textAlign: 'center', maxWidth: 300 }}>
            <ClientOptions />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default RenderClientDashboard;
