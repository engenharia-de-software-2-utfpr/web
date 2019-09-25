import React from "react";

import { Switch, Route, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import routes from "../routes";
import Header from "./Header";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const renderContent = () => {
	return routes.map((route, index) => <Route key={index} {...route} />);
}

function MainLayout() {
  return (
    <Layout>
      <Header />
      <Layout>
        
        <Layout style={{ padding: "0 24px 24px" }}>
					<Switch>
						{ renderContent() }
					</Switch>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default withRouter(MainLayout);
