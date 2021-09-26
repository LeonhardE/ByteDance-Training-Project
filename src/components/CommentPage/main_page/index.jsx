import React, { Component } from 'react'
import Comments from '../Comments'
import ShowBox from '../showBox'

import './index.css'
// import 'antd/dist/antd.css'; 



export default class MainPage extends Component {
    render() {
        return (
            <div>
                <div className = 'container'>
                    <div className = "header">
                        header
                    </div>
                    <div className = "comment" >
                        <Comments/>
                    </div>
                    <div className = "showBox">
                        <ShowBox/>
                    </div>
                    <div className = "sideContent">
                        sideContent
                    </div>

                </div>
            </div>
        )
    }
}
