import React from "react";

import "./style/css/homepage.css";
import { Link } from "react-router-dom";
import Friend from './friend'
export default function HomePage() {
    const editorStyle = {
        width: "100vw",
        height: "100vh",
        border: "0",
        overflow: "hidden",
    };

    return (
        <div>
            <div className="navTop">
                <div className="butt"></div>
                <div className='rightRoute'><Friend /></div>
            </div>
            <div className="flexContainer">
                <div className="leftButton">
                    <Link to="/ResourcePage" className="butt"></Link>
                </div>

                <iframe
                    id="editor"
                    src="https://codesandbox.io/embed/pedantic-microservice-z5vxg?fontsize=14&hidenavigation=1&theme=dark&view=editor"
                    style={editorStyle}
                    title="pedantic-microservice-z5vxg"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
            <div className="navBottom">
                <div className="butt"></div>
                <div  className="bottomRoute"><Link to="/MessagePage">{loveIcon}</Link></div>
            </div>
        </div>
    );
}