import React from "react";

import { Layout, Menu } from 'antd';

const { Content, Header } = Layout;

function MainLayout(props) {
  return (
    <Layout>
      {/* <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header> */}
        <Layout style={{ padding: '24px', height: '100vh' }}>
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
