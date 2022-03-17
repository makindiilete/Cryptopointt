import "./App.less";
import "./assets/css/App.css";
import SiderComponent from "./components/SiderComponent";
import HomePage from "./pages/Home.page";
import { useState } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("Dashboard");

  const handleToggleSider = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="app">
      <div className="row">
        <div className="col-2">
          <SiderComponent
            collapsed={collapsed}
            setSelectedTitle={setSelectedTitle}
          />
        </div>
        <div className="col-10 pt-5">
          <HomePage
            handleToggleSider={handleToggleSider}
            selectedTitle={selectedTitle}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
