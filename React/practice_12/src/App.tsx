import { FaBars } from "react-icons/fa";
import { NavDatas } from "./data";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import { useGlobalContext } from "./context";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
function App() {
  const { opensidebar, openModal } = useGlobalContext();
  return (
    <Router>
      <main>
        <button className="sidebar-toggle" onClick={opensidebar}>
          <FaBars></FaBars>
        </button>
        <div className="contents">
          <button className="btn" onClick={openModal}>
            show modal
          </button>
          <Routes>
            {NavDatas.map((item, index) => (
              <Route
                path={item.url}
                element={
                  item.component === null
                    ? null
                    : React.createElement(item.component)
                }
                key={index}
              ></Route>
            ))}
          </Routes>
        </div>
      </main>
      <Modal></Modal>
      <Sidebar></Sidebar>
    </Router>
  );
}

export default App;
