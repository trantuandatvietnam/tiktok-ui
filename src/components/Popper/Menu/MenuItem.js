import React from "react";
import Button from "~/components/Button";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

const MenuItem = ({ data, onClick }) => {
    return (
        <Button
            className={cx("menu-item")}
            to={data.to}
            leftIcon={data.icon}
            separate={data.separate}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    data: PropTypes.object.isRequired,
};
export default MenuItem;
