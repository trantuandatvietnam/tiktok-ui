import React, { forwardRef } from "react";
import images from "~/assets/imgs";
import classNames from "classnames";
import styles from "./Image.module.scss";

const Image = ({ alt, className, fallback, ...props }, ref) => {
    return (
        <img
            className={classNames(styles.wrapper, className)}
            onError={(e) => (e.target.src = fallback || images.placeholder)}
            ref={ref}
            {...props}
            alt={alt}
        />
    );
};

export default forwardRef(Image);
