import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import * as RiIcons from "react-icons/ri";
import "./Header.css";
import Row from "./Row";
import Column from "./Column";
import LinkNav from "./LinkNav";
import List from "./List";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [expandIndex, setExpandIndex] = useState(null);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="flex flex-row h-20 bg-blue-950 items-center justify-between px-8">
        <div className="h-[60%] w-max">
          <Link to="/">
            <img src="./tim7-logo.png" alt="Logo" className="logo h-full" />
          </Link>
        </div>
        <div className="menu-bars cursor-pointer">
          {sidebar ? (
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          ) : (
            <FaIcons.FaBars onClick={showSidebar} />
          )}
        </div>
        {/* <div className="md:flex flex-row items-center h-[50%] w-max hidden"> */}
        <div className={sidebar ? "nav-menu active pt-20" : "nav-menu"}>
          <div className="top-logo w-full h-20 content-center justify-center">
            <Link
              to="/"
              className="flex justify-center w-max h-full items-center"
            >
              <img
                src="./tim7-logo.png"
                alt="Logo"
                className="logo h-[60%]"
                onClick={showSidebar}
              />
            </Link>
          </div>
          {NavItems.map((child, index) => (
            <li key={index} className="nav-text">
              <Link
                to={child.path}
                onClick={() => {
                  setExpandIndex(expandIndex === index ? null : index);
                }}
              >
                <Row>
                  {child.title}
                  {child.childrens ? (
                    <span className="content-center text-white text-2xl">
                      {expandIndex === index ? (
                        <RiIcons.RiArrowDropUpLine />
                      ) : (
                        <RiIcons.RiArrowDropDownLine />
                      )}
                    </span>
                  ) : null}
                </Row>
              </Link>
              {child.childrens && (
                <ul
                  className={
                    expandIndex === index ? "child-menu active" : "child-menu"
                  }
                >
                  {child.childrens.map((subChild, subIndex) => (
                    <li key={subIndex} className="nav-text-child">
                      <Link to={subChild.path}>{subChild.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
