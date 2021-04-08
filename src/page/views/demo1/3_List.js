import React, { Component } from "react"
import Time from "./2_cycle"
// 组件传值
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'小明',
            isShow:false
        }
    }

    render() {
        return (<div>
            <Time name={this.state.name} isShow={this.state.isShow} changeShow={()=>{
                this.setState({
                    isShow:!this.state.isShow
                })
            }}/>
            我是list组件</div>)
    }
}
export default List