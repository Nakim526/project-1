import React, { useState } from "react";
import { Link } from "react-router";
import Row from "./Row";
import * as RiIcons from "react-icons/ri";

function List({ children, link, className }) {
  const [expandIndex, setExpandIndex] = useState(null);

  if (link) {
    return children.map((child, index) => (
      <li key={index} className={className}>
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
            <List
              children={child.childrens}
              link={link}
              className={"nav-text-child"}
            />
          </ul>
        )}
      </li>
    ));
  }
  return children.map((child, index) => (
    <li key={index} className={className} onClick={onClick}>
      {child}
    </li>
  ));
}

export default List;
