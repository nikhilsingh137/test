import { createBrowserRouter } from "react-router-dom";
import SearchBox from "./Form/SearchBox";
import About from "./Home/About";
import AboutFilter from "./Home/AboutFilter";
import PostData from "./Form/PostData";
import Login from "./Form/Login";
import EmailNotification from "./Form/EmailNotification";
import EmailSend from "./Form/EmailSend";
import Tab from "./Tab/Tab";
import Accordian from "./Accordian/Accordian";
import Movies from "./Movies/Movies";
import Favorate from "./Movies/Favorate";
import MainPage from "./News/MainPage";
import Rashi from "./Rashi/Rashi";
import RashiDetail from "./Rashi/RashiDetail";
import Cricket from "./News/Cricket";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainPage />
      </>
    ),
  },
  {
    path: "/:userId",
    element: (
      <>
        <MainPage />
      </>
    ),
  },
  {
    path: "/:userId/:userId",
    element: (
      <>
        <MainPage />
      </>
    ),
  },
  {
    path: "/service",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/signUp",
    element: (
      <>
        <PostData />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <EmailNotification />
        <EmailSend />
        <Movies />
      </>
    ),
  },
  {
    path: "/content",
    element: (
      <>
        <Tab />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Accordian />
        <Favorate />
      </>
    ),
  },

  {
    path: "/item",
    element: (
      <>
        <SearchBox />
        <About />
      </>
    ),
  },

  {
    path: "/item/:userTitle",
    element: (
      <>
        <AboutFilter />
      </>
    ),
  },
  {
    path: "/rashi",
    element: (
      <>
        <Rashi />
      </>
    ),
  },
  {
    path: "/rashi/:userId",
    element: (
      <>
        <Rashi />
      </>
    ),
  },
  {
    path: "/rashi/:userId/:userId",
    element: (
      <>
        <RashiDetail />
      </>
    ),
  },
  {
    path: "/:userId/:userId/:userId/:userId",
    element: (
      <>
        <Cricket />
      </>
    ),
  },
]);

export default router;
