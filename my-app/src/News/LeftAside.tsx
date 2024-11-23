import React, { useEffect, useState } from "react";
import Style from "./leftaside.module.scss";
import { fetchLeft } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import StickyBox from "react-sticky-box";
import { useNavigate } from "react-router-dom";

const LeftAside = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchLeft());
  }, [dispatch]);

  const [active, setActive] = useState<any>("3970");
  const handleActive = (id: any, url: any) => {
    setActive(id);
    navigate(url);
  };

  return (
    <div className={Style.LeftAside}>
      <StickyBox style={{ zIndex: "1" }}>
        <div className={Style.left}>
          {data.leftApiData?.user &&
            data.leftApiData.user.map((item) => {
              return (
                <a
                  href={item.listingUrl}
                  key={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleActive(item.id, item.listingUrl);
                  }}
                  className={active === item.id ? Style.active : ""}
                >
                  <img src={item.img} alt="" />
                  <span style={{ color: `${item.color}` }}>
                    {item.displayName}
                  </span>
                </a>
              );
            })}
        </div>
      </StickyBox>
    </div>
  );
};

export default LeftAside;
