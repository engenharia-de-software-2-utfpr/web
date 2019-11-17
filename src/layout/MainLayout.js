import React, { useState } from "react";

import { Layout, Menu, Icon, Modal } from "antd";
import styles from "./MainLayout.module.scss";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { confirm } = Modal;

function MainLayout(props) {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed);
  }

  const onLogout = () => {
    confirm({
      title: 'Você deseja realmente sair da aplicação?',
      okText: 'Sim',
      cancelText: 'Cancelar',
      // onOk: () => {
      //   localStorage.clear();
      //   window.location = '/';
      // },
    });
  }

  const menuItems = [
    {
      key: 'home',
      label: 'Mapa',
      icon: 'global',
      path: '/home',
    },
    {
      key: 'allOccurence',
      label: 'Ocorrência',
      icon: 'alert',
      path: '/allOccurrences'
    },
    {
      key: 'pendingPage',
      label: 'Ocorrências Pendentes',
      icon: 'alert',
      path: '/pendencias'
    },
    {
      key: 'user',
      label: 'Usuários',
      icon: 'user',
      path: '/users'
    },
  ]

  const renderMenuItems = () => {
    return menuItems.map(item => {
      return (
        <Menu.Item key={item.key} >
          {/* <Link to = {item.path}> */}
            <Icon type={item.icon} />
            <span>{item.label}</span>
          {/* </Link> */}
        </Menu.Item>
      )
    });
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} className={styles.sider}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['map']}>
          {renderMenuItems()}
        </Menu>
      </Sider>
      <Layout style={{ height: '100vh' }}>
        <Header className={styles.header}>
          <Icon
            className={[styles.button, styles.trigger]}
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
          <Icon onClick={onLogout} className={[styles.logoutButton, styles.button]} type="logout" />
        </Header>
        <Content
          style={{
            background: '#fff',
            // padding: 24,
            margin: 0,
            display: 'flex',
            height: '100%',
          }}
        >
          {props.children}
        </Content>

      </Layout>
    </Layout>
  );
}

export default MainLayout;