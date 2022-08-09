import React from "react";
import classNames from "classnames/bind";
import styles from "./SideBarLeft.module.scss";
import config from "~/config";
import Menu from "./Menu";
import { MenuItem } from "./Menu";
import {
    HomeIcon,
    HomeIconActive,
    UserGroupIcon,
    UserGroupIconActive,
    LiveIcon,
    LiveIconActive,
} from "~/components/Icons";

const cx = classNames.bind(styles);
const SideBarLeft = () => {
    return (
        <aside className={cx("wapper")}>
            <Menu>
                <MenuItem
                    activeIcon={<HomeIconActive />}
                    icon={<HomeIcon />}
                    title="Dành cho bạn"
                    to={config.routesConfig.home}
                />
                <MenuItem
                    activeIcon={<UserGroupIconActive />}
                    icon={<UserGroupIcon />}
                    title="Đang Follow"
                    to={config.routesConfig.following}
                />
                <MenuItem
                    activeIcon={<LiveIconActive />}
                    icon={<LiveIcon />}
                    title="LIVE"
                    to={config.routesConfig.live}
                />
            </Menu>
        </aside>
    );
};

export default SideBarLeft;
