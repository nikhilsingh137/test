import React, { useEffect } from "react";
import Style from "./aboutfilter.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHomeApi } from "../redux/Slice";
import { useParams } from "react-router-dom";

const AboutFilter = () => {
  const { userTitle } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHomeApi());
  }, [dispatch]);
  console.log(userTitle, "nikhil");

  const filterData =
    data.homeApiData &&
    data.homeApiData.filter(
      (item) => item.title.toLowerCase().replaceAll(" ", "-") === userTitle
    );

  console.log(filterData, "hello");

  return (
    <div className={Style.AboutFilter}>
      <div className={Style.wrapper}>
        {filterData &&
          filterData.map((item) => {
            return (
              <div className={Style.Data}>
                <h2>{item.title}</h2>
                <span>
                  <img src={item.images[0]} alt="" />
                </span>
                <p>{item.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AboutFilter;
