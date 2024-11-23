import React, { useEffect } from "react";
import Style from "./rashidata.module.scss";
import { fetchRashiDetail } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const RashiData = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchRashiDetail());
  }, [dispatch]);

  const location = window.location.pathname;
  const gelUrl = location.split("/")[2];
  const filterData =
    data.rashidetailApiData?.RashiDetail &&
    data.rashidetailApiData.RashiDetail.filter(
      (item) => item.id.toString() === gelUrl
    );
  console.log(filterData);
  return (
    <>
      {filterData &&
        filterData.map((item) => {
          return (
            <>
              <div className={Style.Data}>
                <span>
                  <img src={item.rashi.img} alt="" />
                </span>
                <h2>{item.rashi.displayName}</h2>
                <h3>{item.rashi.letters}</h3>
              </div>
              <div className={Style.pandit}>
                <span>
                  <img src={item.kundali.pandit.img} alt="" />
                </span>
                <h2>{item.kundali.pandit.name}</h2>
              </div>
              <div className={Style.mainbox}>
                <h2>{item.kundali.heading}</h2>
                <div
                  className={Style.detail}
                  dangerouslySetInnerHTML={{ __html: item.kundali.desc }}
                />
              </div>
              <div className={Style.Number}>
                <h2>{item.tarot.heading}</h2>
                <div className={Style.change}>
                  <span>
                    <img src={item.tarot.pandit.img} alt="" />
                  </span>
                  <h2>{item.tarot.pandit.name}</h2>
                </div>
                <div
                  className={Style.htmlContent}
                  dangerouslySetInnerHTML={{ __html: item.tarot.content }}
                />
              </div>
            </>
          );
        })}
    </>
  );
};

export default RashiData;
