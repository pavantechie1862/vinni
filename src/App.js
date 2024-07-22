// src/App.js
import React, { useState } from "react";
import AssetsList from "./components/AssetsList";
import EmployeesList from "./components/EmployeesList";
import AssetForm from "./components/AssetForm";
import EmployeeForm from "./components/EmployeeForm";
import Home from "./components/Home";
import "./App.css";

export const tabs = {
  HOME_VIEW: "HOME_VIEW",

  EMPLOYEE_ADD_FORM: "EMPLOYEE_ADD_FORM",
  EMPLOYEE_UPDATE_FORM: "EMPLOYEE_UPDATE_FORM",
  EMPLOYEE_LIST: "EMPLOYEE_LIST",

  ASSET_ADD_FORM: "ASSET_ADD_FORM",
  ASSETS_UPDATE_FORM: "ASSETS_UPDATE_FORM",
  ASSET_LIST: "ASSET_LIST",
};

const App = () => {
  const [view, setView] = useState(tabs.HOME_VIEW);
  const [initialData, setInitialData] = useState({});

  const tabChanged = (tabName, data = {}) => {
    setView(tabName);
    setInitialData(data);
  };

  const renderView = () => {
    switch (view) {
      case tabs.EMPLOYEE_ADD_FORM:
        return <EmployeeForm tabChanged={tabChanged} />;

      case tabs.EMPLOYEE_UPDATE_FORM:
        return (
          <EmployeeForm
            update
            initialData={initialData}
            tabChanged={tabChanged}
          />
        );

      case tabs.EMPLOYEE_LIST:
        return (
          <EmployeesList tabChanged={tabChanged} initialData={initialData} />
        );

      case tabs.ASSET_LIST:
        return <AssetsList tabChanged={tabChanged} />;

      case tabs.ASSET_ADD_FORM:
        return <AssetForm tabChanged={tabChanged} />;

      case tabs.ASSETS_UPDATE_FORM:
        return (
          <AssetForm update tabChanged={tabChanged} initialData={initialData} />
        );

      default:
        return <Home tabChanged={tabChanged} />;
    }
  };

  return <div>{renderView()}</div>;
};

export default App;
