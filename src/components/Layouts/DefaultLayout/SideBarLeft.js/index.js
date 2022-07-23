import React from "react";
import classNames from "classnames/bind";
import styles from "./SideBarLeft.module.scss";

const cx = classNames.bind(styles);
const SideBarLeft = () => {
    return <aside className={cx("wapper")}>SideBarLeft</aside>;
};

export default SideBarLeft;
