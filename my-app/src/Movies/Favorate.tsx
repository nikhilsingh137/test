import React, { useEffect, useState } from "react";

const Favorate = () => {
  const [favorate, setFavorate] = useState<any | null>(null);

  useEffect(() => {
    const favoratestore = localStorage.getItem("Favorate");
    const favorate = favoratestore ? JSON.parse(favoratestore) : [];
    setFavorate(favorate);
  }, []);

  const handleClick = (imdbID: any) => {
    const updatedMovie = favorate.filter((item: any) => item.imdbID !== imdbID);
    setFavorate(updatedMovie);
    localStorage.setItem("Favorate", JSON.stringify(updatedMovie));
  };
  return (
    <div>
      {favorate &&
        favorate.map((item: any) => {
          return (
            <div>
              <h2>{item.Title}</h2>
              <img src={item.Poster} alt="" />
              <button
                onClick={() => handleClick(item.imdbID)}
                style={{ cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Favorate;
