import React from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Menu = ({ children }) => {
    return <nav className={cx("menu")}>{children}</nav>;
};

Menu.prototype = {
    children: PropTypes.node,
};
export default Menu;
