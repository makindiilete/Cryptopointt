import React, { useEffect, useState } from "react";
import {
  AiOutlinePlus,
  BiSearchAlt,
  BsDot,
  BsRecordCircleFill,
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
import { Progress } from "antd";
import { getDays } from "../Utils/calendar";
import { getAllUsers } from "../Utils/tasks";
import { useTablet } from "../hooks/useMobile";

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

let percentage = [32, 45, 55, 36, 33, 56, 43, 77, 85, 41];
const HomePage = ({ handleToggleSider, selectedTitle }) => {
  const tablet = useTablet();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [users, setUsers] = useState([]);
  const [taskList] = useState([
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
  const [totalPercent, setTotalPercent] = useState(0);

  useEffect(() => {
    const calendar = getDays();
    setDates(calendar);
    const userList = getAllUsers();
    setUsers(userList);
    handleTotalPercent(userList);
  }, []);

  function handleTotalPercent(usersArg) {
    let total = 0;
    for (const percent of percentage) {
      total += percent;
    }
    setTotalPercent(Math.floor(total / 10));
  }

  function incrementTasksPercent() {
    let latestPercentages = [...percentage];
    console.log("lates percentage = ", latestPercentages);
    for (let i = 0; i < latestPercentages.length; i++) {
      if (latestPercentages[i] < 100 && latestPercentages[i] + 10 < 100) {
        latestPercentages[i] += 10;
      } else {
        latestPercentages[i] = 100;
      }
    }
    percentage = latestPercentages;
  }

  useEffect(() => {
    let incrementId;
    if (percentage !== [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]) {
      incrementId = setInterval(
        () => {
          incrementTasksPercent();
          handleTotalPercent();
        },
        10000,
        "increment"
      );
    }

    return () => {
      clearInterval(incrementId);
    };
  }, []);

  useEffect(() => {
    handleTotalPercent();
  }, [users]);

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
        <div className="mr-4" style={{ borderRight: "1px solid #bebebe" }} />

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
              Cryptopoint App
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
              <div className="d-flex">
                <div className="text-muted">
                  <AiOutlinePlus />
                </div>
                <p className="padding-none mx-2 text-muted">Invite</p>
              </div>
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
        <div className="calendar d-flex justify-content-around position-relative">
          {dates?.map((date, index) => (
            <div
              key={date}
              className={
                date?.includes(String(new Date().getDate()))
                  ? "home__current-date"
                  : ""
              }
            >
              {date?.length === 3 ? (
                <small className="padding-none">
                  <span
                    style={
                      new Date().getDate() === Number(`${date[1]}${date[2]}`)
                        ? { color: "#fff", opacity: "1" }
                        : { opacity: "0.4", color: "#bebebe" }
                    }
                  >
                    {date[0]}
                  </span>
                  <span>{`${date[1]}${date[2]}`}</span>
                </small>
              ) : (
                <small className="padding-none">
                  <span
                    className="text-muted"
                    style={
                      new Date().getDate() === Number(`${date[1]}`)
                        ? { color: "#fff", opacity: "1" }
                        : { opacity: "0.4", color: "#bebebe" }
                    }
                  >
                    {date[0]}
                  </span>
                  <span>{`${date[1]}`}</span>
                </small>
              )}
            </div>
          ))}
          <div className="position-absolute home__current-date-pointer-head" />
          <div className="position-absolute home__current-date-pointer-line" />
          <div className="position-absolute home-divider-line one" />
          <div className="position-absolute home-divider-line two" />
          <div className="position-absolute home-divider-line three" />
          <div className="position-absolute home-divider-line four" />
          {!tablet && (
            <>
              <div className="position-absolute home-divider-line five" />
              <div className="position-absolute home-divider-line six" />
              <div className="position-absolute home-divider-line two" />
              <div className="position-absolute home-divider-line seven" />
              <div className="position-absolute home-divider-line eight" />
              <div className="position-absolute home-divider-line nine" />
              <div className="position-absolute home-divider-line ten" />
              <div className="position-absolute home-divider-line eleven" />
              <div className="position-absolute home-divider-line twelve" />
              <div className="position-absolute home-divider-line thirteen" />
              <div className="position-absolute home-divider-line fourteen" />
            </>
          )}
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
            <div className="col-md-9 d-flex align-items-center">
              <div
                className={`position-relative home__tasks box-${index}`}
                style={{
                  width: "90%",
                }}
              >
                <div
                  style={{
                    width:
                      percentage[index] === 100
                        ? "100%"
                        : `${percentage[index] - 10}%`,
                    transition: "width 1.5s",
                  }}
                  className={`position-relative home__tasks__inner box-${index}`}
                >
                  <div
                    className={`position-absolute home__tasks__label box-${index}`}
                    style={{ zIndex: "999", left: "2rem", top: "1rem" }}
                  >
                    <span className="mr-2">
                      <BsRecordCircleFill color="#fff" />
                    </span>
                    <small style={{ overflow: "scroll" }}>
                      {taskList[Math.floor(Math.random() * 10)].task}
                    </small>
                  </div>
                </div>
                <span
                  className={`position-absolute home__tasks__text box-${index}`}
                  style={{ zIndex: "999", right: "15rem", top: "1rem" }}
                >
                  {percentage[index]}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
