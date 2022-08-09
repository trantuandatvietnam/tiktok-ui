import { Wapper as PopperWrapper } from "~/components/Popper";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import MenuItem from "./MenuItem";
import Header from "./Header";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);
const defaultFn = () => {};

const Menu = ({
    children,
    items = [],
    onChange = defaultFn,
    hideOnClick = false,
    ...passProps
}) => {
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

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div {...attrs} className={cx("menu-list")}>
            <PopperWrapper className={cx("menu-popper")}>
                {history.length > 1 && (
                    <Header onBack={handleBack} title={current.title} />
                )}
                <div className={cx("menu-body")}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );
    // Handle reset to the first menu
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            offset={[30, 10]}
            onHidden={handleReset}
            interactive
            delay={[100, 500]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            {...passProps}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
