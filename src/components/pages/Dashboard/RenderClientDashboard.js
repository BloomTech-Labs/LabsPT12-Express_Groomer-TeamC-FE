import React, { useContext } from 'react';
import ClientOptions from '../LoggedInOptions/ClientOptions';
import DashboardContext from '../../../state/dashboard/dashboardContext';
import { Layout, Menu, Image, Avatar } from 'antd';
import { HeartOutlined, IdcardOutlined } from '@ant-design/icons';
import {
  UserProfile,
  ClientPets,
  PetUpdateForm,
  AddPetForm,
  ProfileUpdateForm,
} from './dashboardComponents';
const { Content, Sider } = Layout;

const RenderClientDashboard = props => {
  const dashboardContext = useContext(DashboardContext);
  const { dashView, changeView } = dashboardContext;

  const { avatarUrl, created_at } = props.user;

  return (
    <div>
      <Layout>
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
              <Menu.Item
                key="1"
                icon={<IdcardOutlined />}
                onClick={() => changeView(1)}
              >
                Profile
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<HeartOutlined />}
                onClick={() => changeView(2)}
              >
                Your Pets
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ background: '#FFFFFF', padding: '20px 50px' }}>
              <div>
                {dashView === 1 && <UserProfile />}
                {dashView === 2 && <ClientPets />}
                {dashView === 3 && <PetUpdateForm />}
                {dashView === 4 && <AddPetForm />}
                {dashView === 5 && <ProfileUpdateForm />}
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
          <Content style={{ textAlign: 'center', maxWidth: 300 }}>
            <ClientOptions />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default RenderClientDashboard;
