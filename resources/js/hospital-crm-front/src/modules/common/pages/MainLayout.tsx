import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/index.tsx"
import Navbar from "../components/Navbar/index.tsx";
import StickyBox from "react-sticky-box";
import mainLayoutStyles from "../style/index.module.css";

const MainLayout: React.FC = () => {
    return (
        <>
            <div  className={`${mainLayoutStyles.basic_font_style} block_width row g-0`}>
                <div className={`${mainLayoutStyles.min_with_for_block} block_width col-12 pb-2`}>
                    <Navbar/>
                </div>
            </div>
            <div  className={`${mainLayoutStyles.basic_font_style} min_width_for_block row g-0 pt-4`}>
                <div className="col-3 col-sm-2 col-md-1">
                <StickyBox offsetTop={10} offsetBottom={20}>
                    <Sidebar />
                    </StickyBox>
                </div>
                <div className={`${mainLayoutStyles.basic_font_style} col-9 col-sm-10 col-md-11`}>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default MainLayout;
