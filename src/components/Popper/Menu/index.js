import { Wapper as PopperWrapper } from "~/components/Popper";
import React from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[100, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div {...attrs} className={cx("menu-list")}>
                    <PopperWrapper className={cx("menu-popper")}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
