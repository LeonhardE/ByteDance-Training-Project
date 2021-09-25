import React from 'react';
export default function HomePage() {
    const editorStyle = {
        width: "100%",
        height: "900px",
        border: '0',
        borderRadius: "4px",
        overflow: "hidden"
    }
    return (
        <div>
            <div className='flexContainer'>
                <iframe src="https://codesandbox.io/embed/pedantic-microservice-z5vxg?codemirror=1&fontsize=14&hidenavigation=1&theme=dark"
                    style={editorStyle}
                    title="pedantic-microservice-z5vxg"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
        </div>
    )
}