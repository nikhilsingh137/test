import React, { useEffect } from "react";
import Style from "./about.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHomeApi } from "../redux/Slice";

const About = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHomeApi());
  }, [dispatch]);
  return (
    <div className={Style.About}>
      <div className={Style.wrapper}>
        {data.homeApiData &&
          data.homeApiData.map((item) => {
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

export default About;
