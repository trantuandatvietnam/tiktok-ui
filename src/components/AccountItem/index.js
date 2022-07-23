import React from "react";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const AccountItem = () => {
    return (
        <div className={cx("wrapper")}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d3c4e53e0a86d58d66eeb67dfe716c5a~c5_300x300.webp?x-expires=1658667600&x-signature=5ynt7ZTHKrHjA6Kpinlbskb%2BDjM%3D"
                className={cx("avatar")}
                alt="Hoa"
            />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>Hoa</span>
                    <FontAwesomeIcon
                        className={cx("check-icon")}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx("username")}>Trần Thị Hoaa</span>
            </div>
        </div>
    );
};

export default AccountItem;
