import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCoins,
    faEarthEurope,
    faEllipsisVertical,
    faGears,
    faKeyboard,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import images from "~/assets/imgs";
import Button from "~/components/Button";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Menu from "~/components/Popper/Menu";
import Search from "../Search";
import styles from "./Header.module.scss";
// routes config
import config from "~/config";

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
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: "Đăng xuất",
        separate: true,
    },
];
const Header = () => {
    const currentUser = true;
    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link to={config.routesConfig.home} className={cx("logo")}>
                    <Image src={images.logo} alt="logo" />
                </Link>
                <Search />
                {/* Actions */}
                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video">
                                <button className={cx("actions-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Tin nhắn">
                                <button className={cx("actions-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Hộp thư">
                                <button className={cx("actions-btn")}>
                                    <InboxIcon />
                                    <span className={cx("badge")}>12</span>
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
