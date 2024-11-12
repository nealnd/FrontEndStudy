import { FaBars } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Navlink } from "./utils";
import { useEffect, useRef, useState } from "react";
import React from "react";

function App() {
  const [showLinks, setShowLinks] = useState(false);
  const linkRef = useRef<HTMLUListElement>(null);
  const linkContainerRef = useRef<HTMLDivElement>(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    if (linkRef.current && linkContainerRef.current) {
      const linksHeight = linkRef.current?.clientHeight;
      if (showLinks) linkContainerRef.current.style.height = `${linksHeight}px`;
      else linkContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);
  return (
    <Router>
      <main>
        <nav>
          <div className="nav-center">
            <div className="nav-header">
              <img src="/logo.svg" className="logo" alt="logo" />
              <button className="nav-toggle" onClick={toggleLinks}>
                <FaBars></FaBars>
              </button>
            </div>
            <div className="links-container" ref={linkContainerRef}>
              <ul className="links" ref={linkRef}>
                {Navlink.map((item, index) => (
                  <li>
                    <Link to={item.to} key={index}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="social-icons">
              <li>
                <a href="https://www.twitter.com">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <FaBehance />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="contents">
          <Routes>
            {Navlink.map((item, index) => (
              <Route
                path={item.to}
                element={React.createElement(item.component)}
                key={index}
              ></Route>
            ))}
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
