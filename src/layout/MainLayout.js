import React, { useState } from "react";

import { Layout, Menu, Icon } from 'antd';

const { Content, Header, Sider } = Layout;

function MainLayout(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Usuários</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>Ocorrências</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
          </Header>
          <Content
            style={{
              background: '#fff',
              // padding: 24,
              margin: 0,
              height: '100%',
              minHeight: 280,
            }}
        >
          {props.children}
        </Content>
        </Layout>
      </Layout>
  );
}

export default MainLayout;