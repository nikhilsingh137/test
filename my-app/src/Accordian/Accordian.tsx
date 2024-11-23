import React, { useEffect, useState } from "react";
import Style from "./accordian.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHomeApi } from "../redux/Slice";

const Accordian = () => {
  const [accordian, setAccordian] = useState(null);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHomeApi());
  }, [dispatch]);

  const handleClick = (id: any) => {
    setAccordian(accordian === id ? null : id);
  };

  return (
    <div className={Style.accordian}>
      <div className={Style.wrapper}>
        {data.homeApiData &&
          data.homeApiData.map((item) => {
            return (
              <>
                <div className={`${Style.mainbox}`}>
                  <div
                    className={Style.divide}
                    onClick={() => handleClick(item.id)}
                  >
                    <div className={Style.text}>
                      <span>
                        <img src={item.images[0]} alt="" />
                      </span>
                      <h2>{item.brand}</h2>
                    </div>
                    <div className={Style.icon}>
                      <i
                        className={`fa-solid fa-angle-down ${
                          accordian === item.id ? Style.rotate : ""
                        }`}
                      ></i>
                    </div>
                  </div>

                  <div
                    className={`${Style.content} ${
                      accordian === item.id ? Style.show : ""
                    }`}
                  >
                    <div className={Style.tab}>
                      <h2>{item.description}</h2>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Accordian;
