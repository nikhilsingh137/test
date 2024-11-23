import React, { useEffect, useState } from "react";
import Style from "./header.module.scss";
import StickyBox from "react-sticky-box";

const Header = () => {
  const [line, setLine] = useState(0);
  useEffect(() => {
    const handleLine = () => {
      const scrolled = window.scrollY;
      const lineHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const line: any = (scrolled / lineHeight) * 100;
      setLine(line);
    };
    window.addEventListener("scroll", handleLine);
    return () => {
      window.removeEventListener("scroll", handleLine);
    };
  }, []);
  return (
    <>
      <StickyBox style={{ zIndex: "9" }}>
        <div className={Style.Header}>
          <div className={Style.wrapper}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/service">Service</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/content">Content</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/item">Items</a>
              </li>
              <li>
                <a href="/rashi">Rashi</a>
              </li>
            </ul>
          </div>
          <div className={Style.line} style={{ width: `${line}%` }}></div>
        </div>
      </StickyBox>
    </>
  );
};

export default Header;
