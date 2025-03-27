import React from "react";
import { Link } from "react-router";

const LinkNav = ({ path, children }) => {
    return <Link to={path}>{ children }</Link>;
};

export default LinkNav;
