import React from "react";
import Header from "./Header";
import SideBarLeft from "./SideBarLeft.js";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBarLeft />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
