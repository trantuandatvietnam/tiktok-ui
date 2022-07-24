import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const Button = ({
    children,
    to,
    href,
    primary = false,
    text = false,
    outline = false,
    disabled = false,
    rounded = false,
    size = "md",
    className,
    leftIcon,
    rightIcon,
    separate = false,
    onClick,
    ...passProps
}) => {
    let Comp = "button";
    const props = {
        onClick,
        ...passProps,
    };
    // if button was passed by disabled => delete all eventListener (its start with "on")
    if (disabled) {
        Object.keys(props).forEach((propKey) => {
            if (
                propKey.startsWith("on") &&
                typeof props[propKey] === "function"
            ) {
                delete props.propKey;
            }
        });
    }
    // Check, if Comp has "to" props => its Link element
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        // Check, if Comp has "href" props => its a element
        props.href = href;
        Comp = "a";
    }

    let classes = cx("wrapper", {
        primary,
        outline,
        disabled,
        rounded,
        text,
        separate,
        [size]: size,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Comp>
    );
};

export default Button;
