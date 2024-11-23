import React, { useState } from "react";
import Style from "./rashiDetail.module.scss";
import RashiData from "./RashiData";
import Rashi from "./Rashi";
import RashiTab from "./RashiTab";
import { useNavigate } from "react-router-dom";

const RashiDetail = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const [today, setToday] = useState(true);
  const [year, setYear] = useState(false);
  const handleChange = () => {
    setHide(true);
  };

  const handleToday = () => {
    const location = window.location.pathname;
    setToday(true);
    setYear(false);
    navigate(location.replaceAll("/yearly/", "/today/"));
  };

  const handleYear = () => {
    const location = window.location.pathname;
    setYear(true);
    setToday(false);
    navigate(location.replaceAll("/today/", "/yearly/"));
  };
  return (
    <div className={Style.RashiDetail}>
      <>{hide && <Rashi hide={hide} setHide={setHide} />}</>
      <div className={Style.wrapper}>
        <div className={Style.title}>
          <h2>
            Hindi / <strong>NewsRashifal</strong>
          </h2>
          <span>
            <h2>आज का मेष राशिफल</h2>
            <h3 onClick={handleChange}>राशि चुनें</h3>
          </span>
          <div className={Style.tab}>
            <h2 onClick={handleToday} className={today ? Style.active : ""}>
              आज का राशिफल
            </h2>
            <h3 onClick={handleYear} className={year ? Style.active : ""}>
              वार्षिक राशिफल <span>2024</span>
            </h3>
          </div>
        </div>
        {today && (
          <>
            <div className={Style.content}>
              <RashiData />
            </div>
            <div className={Style.TabData}>
              <RashiTab />
            </div>
          </>
        )}
        {year && (
          <>
            <div className={Style.content}>
              <RashiData />
            </div>
            <div className={Style.TabData}>
              <RashiTab />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RashiDetail;
