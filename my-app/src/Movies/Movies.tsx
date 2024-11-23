import React, { useEffect, useState } from "react";
import Style from "./movie.module.scss";
import { fetchMovie } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Movies = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchMovie({ query }));
  }, [dispatch, query]);
  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleClick = (imdbID: any) => {
    const favoratestore = localStorage.getItem("Favorate");
    const favorate = favoratestore ? JSON.parse(favoratestore) : [];
    if (!favorate.some((item: any) => item.imdbID === imdbID.imdbID)) {
      favorate.push(imdbID);
      localStorage.setItem("Favorate", JSON.stringify(favorate));
    }
  };
  return (
    <div className={Style.movie}>
      <div className={Style.box}>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
      </div>
      {data.movieData?.Search &&
        data.movieData.Search.map((item) => {
          return (
            <div className={Style.detail}>
              <h2>{item.Title}</h2>
              <img src={item.Poster} alt="" />
              <button
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(item)}
              >
                Favorate
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Movies;
