import React from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from "../src/routes";

function App() {
  const renderContent = () => {
    return routes.map((route, index) => <Route key={index} {...route} />);
  }

  return (
    <BrowserRouter>
      <Switch>
				{ renderContent() }
			</Switch>
    </BrowserRouter>
  );
}

export default App;
