import CounterPage from "./pages/CounterPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { useState } from "react";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  const [currentPage, SetCurrentPage] = useState("landingPage");

  const pages = {
    counterPage: <CounterPage />,
    landingPage: <LandingPage />,
  };

  return (
    <>
      <NavBar selection={SetCurrentPage}></NavBar>

      {pages[currentPage]}
    </>
  );
};

export default App;
