import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import images from "~/assets/imgs";
import classNames from "classnames";
import styles from "./Image.module.scss";

const Image = forwardRef(({ alt, className, fallback, ...props }, ref) => {
    return (
        <img
            className={classNames(styles.wrapper, className)}
            onError={(e) => (e.target.src = fallback || images.placeholder)}
            ref={ref}
            {...props}
            alt={alt}
        />
    );
});

Image.propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
