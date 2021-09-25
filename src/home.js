import React from 'react';
import { useRef, useState } from 'react';
import { Drawer } from 'antd'
import 'antd/dist/antd.css'
import './style/css/homepage.css';
export default function HomePage() {
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const editorStyle = {
        width: "100%",
        minHeight: "825px",
        border: '0',
        borderRadius: "4px",
        overflow: "hidden"
    }
    const drawerStyle = {
        backgroundColor: 'grey'
    }



    return (
        <div>
            <div className='flexContainer'>
                <div className='leftButton'>
                    <div className='butt' onClick={() => setSideBarVisible(true)}></div>
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
            <Drawer
                visible={sideBarVisible}
                width={'80px'}
                mask={false}
                onClose={() => { setSideBarVisible(false) }}
                placement={'left'}
                closable={false}
                drawerStyle={drawerStyle}
            >
                <div className='drawerContainer'>
                    <div className='navContainer'>
                        <p>1</p>
                    </div>
                    <div className='closeButton'>
                        <div className='butt' onClick={()=>{setSideBarVisible(false)}}></div>
                    </div>
                </div>

            </Drawer>
        </div>
    )
}