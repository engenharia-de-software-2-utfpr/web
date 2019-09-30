import React from "react";

import MainLayout from "../../layout/MainLayout";
import MapRender from "./map";

function HomeScreen() {
  return (
    <MainLayout>
      <MapRender />
    </MainLayout>
  );
}

export default HomeScreen;
