import React, { useEffect, useState } from "react";
import Style from "./rashi.module.scss";
import { fetchRashi } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";

const Rashi = ({ hide, setHide }: any) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("1");
  const [button, setButton] = useState(true);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchRashi());
  }, [dispatch]);

  const handleActive = (id: any, url: any) => {
    setActive(id);
    navigate(url);
  };

  const handleShow = () => {
    setHide(true);
    setButton(false);
  };
  const handleHide = () => {
    setHide(false);
    setButton(true);
  };
  return (
    <>
      {button && (
        <div className={Style.button}>
          <button onClick={handleShow} style={{ cursor: "pointer" }}>
            Check Your Rashi
          </button>
        </div>
      )}
      {hide && (
        <div className={Style.Rashi}>
          <div className={Style.divide}>
            <h1>चंद्र राशि के अनुसार अपनी राशि चुनिए</h1>
            <div className={Style.mainbox}>
              {data.rashiApiData &&
                data.rashiApiData.map((item) => {
                  return (
                    <a
                      href={`/rashi/${item.id}/today/`}
                      className={active === item.id ? Style.active : ""}
                      onClick={(e) =>
                        handleActive(item.id, `/rashi/${item.id}/today/`)
                      }
                    >
                      <span>
                        <img src={item.img} alt="" />
                      </span>
                      <h2>{item.displayName}</h2>
                      <h3>{item.letters}</h3>
                    </a>
                  );
                })}
            </div>
          </div>
          <div className={Style.cross} onClick={handleHide}>
            X
          </div>
        </div>
      )}
    </>
  );
};

export default Rashi;
