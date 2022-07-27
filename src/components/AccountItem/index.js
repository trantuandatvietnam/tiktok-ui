import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const AccountItem = ({ acc }) => {
    return (
        <Link to={`/@${acc.nickname}`} className={cx("wrapper")}>
            <img
                src={acc?.avatar}
                className={cx("avatar")}
                alt={acc.full_name}
            />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>{acc.full_name}</span>
                    {acc.tick && (
                        <FontAwesomeIcon
                            className={cx("check-icon")}
                            icon={faCheckCircle}
                        />
                    )}
                </p>
                <span className={cx("username")}>{acc.nickname}</span>
            </div>
        </Link>
    );
};

AccountItem.propTypes = {
    acc: PropTypes.object.isRequired,
};

export default AccountItem;
