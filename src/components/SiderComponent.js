import React, { useState } from "react";
import { Layout, Menu } from "antd";
import "../assets/css/SiderComponent.css";
import {
  AiTwotoneFolder,
  BsPlusCircleFill,
  CgTrack,
  FaHistory,
  RiArrowUpSLine,
  RiDashboardFill,
  RiSettings3Fill,
  SiGoogleanalytics,
} from "react-icons/all";
import img from "../assets/images/SVG/logo.svg";
import man from "../assets/images/59.jpg";

const { Sider } = Layout;

const SiderComponent = ({ collapsed, setSelectedTitle }) => {
  const [selectedKey, setSelectedKey] = useState("1");

  function handleSetSelected(key) {
    setSelectedKey(key);
    switch (key) {
      case "1":
        setSelectedTitle("Dashboard");
        break;
      case "2":
        setSelectedTitle("Analytics");
        break;
      case "3":
        setSelectedTitle("Projects");
        break;
      case "4":
        setSelectedTitle("Tracking");
        break;
      case "5":
        setSelectedTitle("History");
        break;
      default:
        setSelectedTitle("Settings");
    }
  }

  return (
    <div className="sider">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="d-flex">
          <img src={img} alt="" className="img-fluid logo" />
          {!collapsed && (
            <small className="align-self-end pl-3 font-weight-bold">
              Cryptopoint
            </small>
          )}
        </div>
        <br />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedKey]}>
          <Menu.Item
            key="1"
            icon={<RiDashboardFill />}
            onClick={() => handleSetSelected("1")}
          >
            <span className="font-weight-bold">Dashboard</span>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<SiGoogleanalytics />}
            onClick={() => handleSetSelected("2")}
          >
            <span className="font-weight-bold">Analytics</span>
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<AiTwotoneFolder />}
            onClick={() => handleSetSelected("3")}
          >
            <span className="font-weight-bold">Projects</span>
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<CgTrack />}
            onClick={() => handleSetSelected("4")}
          >
            <span className="font-weight-bold">Tracking</span>
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<FaHistory />}
            onClick={() => handleSetSelected("5")}
          >
            <span className="font-weight-bold">History</span>
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<RiSettings3Fill />}
            onClick={() => handleSetSelected("6")}
          >
            <span className="font-weight-bold">Settings</span>
          </Menu.Item>
          {!collapsed && (
            <>
              <div className="sider__button btn">
                <div>
                  <h5 className="font-weight-bold padding-none text-left">
                    Create
                  </h5>
                  <h5 className="font-weight-bold padding-none text-left">
                    new task
                  </h5>
                </div>
                <BsPlusCircleFill size="3rem" color="#1b5afd" />
              </div>
              <div className="sider__user">
                <div className="d-flex align-items-center">
                  <img src={man} className="img-fluid avatar mr-3" alt="" />
                  <div>
                    <div className="mb-4">
                      <small className="font-weight-bold">Finna .A.</small>
                    </div>
                    <div>
                      <small className="font-weight-bold text-muted">
                        finna@kisg.com
                      </small>
                    </div>
                  </div>
                </div>
                <div>
                  <RiArrowUpSLine color="grey" />
                </div>
              </div>
            </>
          )}
        </Menu>
      </Sider>
    </div>
  );
};

export default SiderComponent;
