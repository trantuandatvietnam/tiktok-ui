import { Wapper as PopperWrapper } from "~/components/Popper";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles);
const defaultFn = () => {};

const Menu = ({ children, items = [], onChange = defaultFn }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            let isParent = !!item.children;

            return (
                <MenuItem
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                    key={index}
                    data={item}
                />
            );
        });
    };
    return (
        <Tippy
            offset={[30, 10]}
            onHidden={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            interactive
            delay={[100, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div {...attrs} className={cx("menu-list")}>
                    <PopperWrapper className={cx("menu-popper")}>
                        {history.length > 1 && (
                            <Header
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1)
                                    );
                                }}
                                title={current.title}
                            />
                        )}
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
