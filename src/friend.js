import React from "react"

class Friend extends React.Component {
    constructor() {
        super()
        this.state = {
            // 性别：0代表未选择，1代表男，2代表女
            gender: 0,
            // 年龄：0代表未选择，1代表20-25，2代表25-30，3代表30-35，4代表35-40
            age: 0,
            // 推荐人名
            candidateNames: [],
            // 推荐人照片
            candidatePhotos: [],
            // 推荐人介绍
            candidateInfo: []
        }
    }

    componentDidMount() {
        // 从后端获取默认推荐人信息
        // 后端接口Todo
        fetch('http://localhost:5000/defaultinfo')
        .then(res => res.json())
        .then((data) => {
            this.setState({
                candidateNames: data.data.default_names,
                candidatePhotos: data.data.default_photos,
                candidateInfo: data.data.default_info
            })
            console.log(this.state)
        })
    }

    genderChange(index, e) {
        // 设置性别
        // Todo
    }

    ageChange(index, e) {
        // 设置年龄
        // Todo 
    }

    handleUpdate() {
        // 点击提交按钮更新推荐人信息
        // Todo 
    }

    render() {
        // Todo 
        const {candidateNames, candidatePhotos, candidateInfo} = this.state;
        return (
            <div>
                Friend
                <div>
                    {candidateNames}
                </div>
                <div>
                    {candidatePhotos}
                </div>
                <div>
                    {candidateInfo}
                </div>
            </div>

        )
    }

}

export default Friend
