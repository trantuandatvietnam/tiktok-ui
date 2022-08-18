import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("account-item")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1660960800&x-signature=msxg4QqXVEFtqPRaxZQAAlZuKH8%3D"
                alt=""
            />
            <div className={cx("item-info")}>
                <p className={cx("nickname")}>
                    <strong>Trần Tuấn Đạt</strong>
                    <FontAwesomeIcon
                        className={cx("checkbox")}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx("name")}>Trần Tuấn Đạt</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
