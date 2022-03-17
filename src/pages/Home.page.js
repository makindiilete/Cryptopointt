import React, { useEffect, useState } from "react";
import {
  AiOutlinePlus,
  BiSearchAlt,
  BsDot,
  CgMenuRight,
  GiNestedEclipses,
  HiBell,
  MdKeyboardArrowDown,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
  RiArrowRightSLine,
  RiMore2Fill,
  TiMessages,
} from "react-icons/all";
import "../assets/css/home.css";
import woman1 from "../assets/images/woman1.jpg";
import woman2 from "../assets/images/woman2.jpg";
import woman3 from "../assets/images/woman3.jpg";
import woman4 from "../assets/images/woman4.jpg";
import woman5 from "../assets/images/woman5.jpg";
import woman6 from "../assets/images/woman6.jpg";
import woman7 from "../assets/images/woman7.jpg";
import { Progress } from "antd";
import { getDays } from "../Utils/calendar";
import { getAllUsers } from "../Utils/tasks";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const HomePage = ({ handleToggleSider, selectedTitle }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [users, setUsers] = useState([]);
  const [taskList, setTaskList] = useState([
    { task: "Flow Swift transfer" },
    { task: "Dashboard" },
    { task: "User Profile" },
    { task: "Transfer by phone number" },
    { task: "Chat bot" },
    { task: "Transaction Analytics" },
    { task: "Settings" },
    { task: "Registration" },
    { task: "Booking" },
    { task: "Api Testing" },
  ]);
  const [dates, setDates] = useState([]);
  const [totalPercent, setTotalPercent] = useState(56);

  useEffect(() => {
    const calendar = getDays();
    setDates(calendar);
    const userList = getAllUsers();
    setUsers(userList);
  }, []);

  const nav = () => (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <div className="cursor mr-4" onClick={handleToggleSider}>
          <CgMenuRight size="2rem" />
        </div>
        <br />
        <p className="padding-none font-weight-bold">
          {selectedTitle}
          <span className="text-muted">
            <RiArrowRightSLine /> Cryptopoint
          </span>
        </p>
      </div>
      <div className="d-flex">
        <div className="mr-4 cursor">
          <TiMessages />
        </div>
        <div className="mr-4 cursor">
          <div className="position-relative">
            <HiBell />
            <div
              className="position-absolute"
              style={{ top: "-0.5rem", right: "-1rem" }}
            >
              <BsDot color="red" size="3rem" />
            </div>
          </div>
        </div>
        <div
          className="mr-4"
          style={{ borderRight: "1px solid #bebebe" }}
        ></div>

        <div className="d-flex align-items-center cursor">
          <GiNestedEclipses size="4rem" />
          <p className="padding-none mx-4">TeamApt</p>
          <div className="cursor">
            <MdKeyboardArrowDown color="#bebebe" />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="container-fluid home">
        {nav()}
        <br />
        <div className="d-flex justify-content-between">
          <div>
            <p className="padding-none font-weight-bold mt-4">
              Cryptopoint App..
            </p>
            <div className="d-flex align-items-center">
              <small className="text-muted padding-none mr-4">
                {totalPercent}%
              </small>
              <Progress
                strokeColor={{
                  "0%": "#e9f8fb",
                  "100%": "#1b5afd",
                }}
                showInfo={false}
                percent={totalPercent}
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="home__inviteBtn">
              <div className="text-muted">
                <AiOutlinePlus />
              </div>
              <p className="padding-none mx-2 text-muted">Invite</p>
            </div>
            <div className="home__people ml-5">
              <img src={woman1} alt="" className="img-fluid people" />
              <img src={woman2} alt="" className="img-fluid people" />
              <img src={woman3} alt="" className="img-fluid people" />
              <span className="text-white p-1 box">
                <small>+15</small>
              </span>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <p className="padding-none">
              {`${month[new Date().getMonth()]} ${new Date().getFullYear()}`}
            </p>

            <div>
              <span className="mr-3">
                <RiArrowDropLeftLine size="4rem" color="#bebebe" />
              </span>
              <RiArrowDropRightLine size="4rem" color="#bebebe" />
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="cursor">
              <BiSearchAlt size="3rem" />
            </div>
            <div className="home__drop-down ml-4">
              <small>Month</small>
              <div className="cursor">
                <MdKeyboardArrowDown size="2rem" color="#bebebe" />
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="calendar d-flex justify-content-around">
          {dates?.map((date, index) => (
            <div key={date} className={index === 8 ? "home__current-date" : ""}>
              <small className="padding-none">{date}</small>
            </div>
          ))}
        </div>
        <br />
        {users?.map((user, index) => (
          <div className="row" key={user?.id}>
            <div className="col-md-3">
              <div className="home__user-card">
                <div className="d-flex">
                  <img
                    src={user?.image}
                    className="img-fluid avatar mr-3"
                    alt=""
                  />
                  <div>
                    <small className="font-weight-bold">{user?.name}</small>
                    <br />
                    <small className="text-muted">{user?.job}</small>
                  </div>
                </div>
                <RiMore2Fill size="2rem" color="#bebebe" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
