import React, { useEffect } from "react";
import Style from "./feed.module.scss";
import { fetchFeed } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useLocation } from "react-router-dom";

const Feed = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchFeed());
  }, [dispatch]);

  const location = useLocation();
  const gelUrl = location.pathname;
  console.log(gelUrl, "hello");

  const filterData =
    data.feedApiData?.feed &&
    data.feedApiData.feed.filter(
      (item) => item.category?.listingUrl === gelUrl
    );

  return (
    <div className={Style.Feed}>
      {data.feedApiData?.feed &&
        gelUrl === "/" &&
        data.feedApiData.feed.map((item, index) => {
          return (
            <>
              {item.header?.title && (
                <a
                  href={item.category?.listingUrl}
                  className={`${index === 0 ? Style.firstIndex : ""}`}
                >
                  <h2>
                    <span style={{ color: `${item.category?.color}` }}>
                      {item.header?.slug}
                    </span>{" "}
                    : {item.header?.title}
                  </h2>
                  <strong>
                    <img src={item.header?.media[0].url} alt="" />
                  </strong>
                </a>
              )}
            </>
          );
        })}
      {gelUrl === "/sports/cricket/" && (
        <div className={Style.cricket}>
          <h2>क्रिकेट</h2>
          <a href="/sports/cricket/schedule/completed">
            <div className={Style.frame}>
              <img
                src="https://www.bhaskar.com/__widgets__/assets/images/ic_schedule.79fd1e91.svg"
                alt=""
              />
              <h3>शेड्यूल</h3>
            </div>
            <h3>
              <i className="fa-solid fa-angle-right"></i>
            </h3>
          </a>
        </div>
      )}
      {filterData &&
        gelUrl !== "/" &&
        filterData.map((item) => {
          return (
            <>
              {item.header?.title && (
                <a href={item.category?.listingUrl}>
                  <h2>
                    <span style={{ color: `${item.category?.color}` }}>
                      {item.header?.slug}
                    </span>{" "}
                    : {item.header?.title}
                  </h2>
                  <strong>
                    <img src={item.header?.media[0].url} alt="" />
                  </strong>
                </a>
              )}
            </>
          );
        })}
    </div>
  );
};

export default Feed;
