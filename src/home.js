import React from 'react';
import 'antd/dist/antd.css'
import './style/css/homepage.css';
import {
    Link
} from "react-router-dom";
export default function HomePage() {

    const editorStyle = {
        width: "100%",
        minHeight: "825px",
        border: '0',
        borderRadius: "4px",
        overflow: "hidden"
    }

    return (
        <div>
            <div className='navTop'>
                <div className='butt'></div>
            </div>
            <div className='flexContainer'>
                <div className='leftButton'>
                    <Link to='/nav' className='butt'></Link>
                </div>

               <iframe
                    id='editor'
                    src="https://codesandbox.io/embed/pedantic-microservice-z5vxg?fontsize=14&hidenavigation=1&theme=dark&view=editor"
                    style={editorStyle}
                    title="pedantic-microservice-z5vxg"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
            <div className='navBottom'>
                <div className='butt'></div>
            </div>
        </div>
      </Drawer>
    </div>
  );
}
