import React from 'react';
import { Card, Layout, Image } from 'antd';
import { useHistory } from 'react-router-dom';

const { Meta } = Card;
const { Sider, Content, Footer } = Layout;

const GroomerCard = props => {
  const {
    name,
    city,
    state,
    zip_code,
    services,
    avatarUrl,
    profile_id,
  } = props.groomer;

  let history = useHistory();

  return (
    <div className="groomerCard-ctn" style={{ margin: '0px 20px 60px 20px' }}>
      <Layout>
        <Sider style={{ background: '#FFFFFF' }}>
          <Image
            width={200}
            height={220}
            src={avatarUrl}
            onClick={() => history.push(`/groomer-profile/${profile_id}`)}
          />
        </Sider>
        <Layout>
          <Content style={{ background: '#BDECBE', textAlign: 'center' }}>
            <Meta
              title={`${name}`}
              description={`${city}, ${state}, ${zip_code}`}
            ></Meta>
          </Content>
          <Content>
            <div>
              <p className="">Services</p>
              {services.map(service => (
                <div>
                  {service.name}: {service.cost}
                </div>
              ))}
            </div>
          </Content>
          <Content>
            <div>
              <button>
                <h4>reviews</h4>
              </button>
            </div>
          </Content>
          <Footer style={{ background: '#BDECBE' }}>
            <h3>most recent review here</h3>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default GroomerCard;
