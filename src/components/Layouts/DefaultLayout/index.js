import React from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header/index.js";
import SideBarLeft from "./SideBarLeft.js/index.js";

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <SideBarLeft />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
