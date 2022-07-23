import React from "react";
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

const MenuItem = ({ data }) => {
    return (
        <Button className={cx("menu-item")} to={data.to} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
};

export default MenuItem;
