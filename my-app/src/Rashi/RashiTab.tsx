import React, { useEffect, useState } from "react";
import Style from "./rashitab.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchRashi } from "../redux/Slice";

const RashiTab = () => {
  const [active, setActive] = useState(1);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchRashi());
  }, [dispatch]);

  const handleClick = (id: any) => {
    setActive(id);
  };
  return (
    <div className={Style.RashiTab}>
      <h2>अंक भविष्यफल</h2>
      <div className={Style.Number}>
        {data.rashidetailApiData?.RashiNumerical &&
          data.rashidetailApiData.RashiNumerical.map((item) => {
            return (
              <>
                {item.numerology.numbers &&
                  item.numerology.numbers.map((item) => {
                    return (
                      <>
                        <h2
                          onClick={() => handleClick(item.number)}
                          className={active === item.number ? Style.active : ""}
                        >
                          {item.number}
                        </h2>
                      </>
                    );
                  })}
              </>
            );
          })}
      </div>
      <div className={Style.content}>
        {data.rashidetailApiData?.RashiNumerical &&
          data.rashidetailApiData.RashiNumerical.map((item) => {
            return (
              <>
                {item.numerology.numbers &&
                  item.numerology.numbers.map((item) => {
                    return (
                      <>
                        <div
                          className={`${Style.data} ${
                            active === item.number ? Style.active : ""
                          }`}
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </>
                    );
                  })}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default RashiTab;
