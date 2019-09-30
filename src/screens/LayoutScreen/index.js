import React from "react";

import MapRender from "./map";
import MainLayout from '../../layout/MainLayout';

function LayoutScreen() {
  return (
    <MainLayout>
      <MapRender />
    </MainLayout>
  );
}

export default LayoutScreen;
