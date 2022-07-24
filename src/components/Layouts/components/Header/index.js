import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEarthEurope,
    faEllipsisVertical,
    faGears,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import images from "~/assets/imgs";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import { Wapper as PopperWrapper } from "~/components/Popper";
import Menu from "~/components/Popper/Menu";
import styles from "./Header.module.scss";
import { SearchIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthEurope} />,
        title: "Ngôn ngữ",
        children: {
            title: "Ngôn ngữ",
            data: [
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Tiếng Anh",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Phản hồi và trợ giúp",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Phím tắt trên bàn phím",
    },
];
const Header = () => {
    const inputRef = useRef(null);
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "Xem hồ sơ",
            to: "/info",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Nhận xu",
            to: "/get_coins",
        },
        {
            icon: <FontAwesomeIcon icon={faGears} />,
            title: "Cài đặt",
            to: "/settings",
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: "Tiếng Việt",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: "Đăng xuất",
            separate: true,
        },
    ];
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="logo" />
                </div>
                <HeadlessTippy
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
                        <HeadlessTippy content="Tìm kiếm">
                            <button className={cx("search-btn")}>
                                {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                                <SearchIcon />
                            </button>
                        </HeadlessTippy>
                    </div>
                </HeadlessTippy>
                {/* Actions */}
                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video">
                                <button className={cx("actions-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu
                        onChange={handleMenuChange}
                        items={currentUser ? userMenu : MENU_ITEMS}
                    >
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1627269108971521.jpeg?x-expires=1658808000&x-signature=Q5uIaR0zFgf1Os1su3TNQ7Ast80%3D"
                                alt="Trần Tuấn Đạt"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
