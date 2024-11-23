import React, { useEffect, useState } from "react";
import Style from "./tab.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHomeApi } from "../redux/Slice";

const Tab = () => {
  const [active, setActive] = useState(1);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHomeApi());
  }, [dispatch]);

  const handleClick = (id: any) => {
    setActive(id);
  };
  return (
    <div className={Style.Tab}>
      <div className={Style.wrapper}>
        {data.homeApiData &&
          data.homeApiData.map((item) => {
            return (
              <>
                <h2
                  className={active === item.id ? Style.active : ""}
                  onClick={() => handleClick(item.id)}
                >
                  {item.brand}
                </h2>
              </>
            );
          })}
      </div>
      {data.homeApiData &&
        data.homeApiData.map((item) => {
          return (
            <div
              className={`${Style.content} ${
                active === item.id ? Style.active : ""
              }`}
            >
              <h2>{item.title}</h2>
              <img src={item.images[0]} alt="" />
              <p>{item.price}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Tab;
