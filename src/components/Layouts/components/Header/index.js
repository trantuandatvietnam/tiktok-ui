import React, { useRef, useState } from "react";
import { Wapper as PopperWrapper } from "~/components/Popper";
import Tippy from "@tippyjs/react/headless";
import className from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";

const cx = className.bind(styles);
const Header = () => {
    const inputRef = useRef(null);
    const [searchResult, setSearchResult] = useState([]);

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="logo" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx("search-result")}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>
                                    Tài khoản
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input
                            ref={inputRef}
                            spellCheck={false}
                            placeholder="Tìm kiếm tài khoản và video"
                            type="text"
                        />
                        {/* <button className={cx("clear")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button> */}
                        <button className={cx("loading")}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <Tippy content="Tìm kiếm">
                            <button className={cx("search-btn")}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                    </div>
                </Tippy>
                <div className={cx("actions")}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
