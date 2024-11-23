import React, { useEffect, useState } from "react";
import Style from "./searchbox.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHomeApi } from "../redux/Slice";

const SearchBox = () => {
  const [value, setValue] = useState("");
  const [drop, setDrop] = useState(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHomeApi());
  }, [dispatch]);
  const handleChange = (e: any) => {
    if (e.target.value) {
      setValue(e.target.value);
      setDrop(true);
    } else {
      setValue("");
      setDrop(false);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (value) {
      window.location.href = `${value.toLowerCase().replaceAll(" ", "-")}`;
    }
  };

  const handleClick = (title: any) => {
    setValue(title);
    setDrop(false);
    if (title) {
      window.location.href = `/item/${title
        .toLowerCase()
        .replaceAll(" ", "-")}`;
    }
  };

  const filterData =
    data.homeApiData &&
    data.homeApiData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
  return (
    <div className={Style.SearchBox}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={handleChange}
        />
      </form>
      {drop && (
        <div className={Style.dropBox}>
          <ul>
            {filterData &&
              filterData.map((item) => {
                return (
                  <li onClick={() => handleClick(item.title)}>
                    <span>
                      <img src={item.images[0]} alt="" />
                    </span>
                    <h2>{item.title}</h2>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
