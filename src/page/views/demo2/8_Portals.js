import React, { Component } from "react"
import ReactDOM from 'react-dom';
/**
 * Portals
 * Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。
 * 典型用例是当父组件有 overflow: hidden 或 z-index 样式时，但你需要子组件
 * 能够在视觉上“跳出”其容器。例如，对话框、悬浮卡以及提示框：
*/

//把点我这个按钮 插入到body上
function Child() {
    return <div>
        <button>点我</button>
    </div>
}

class PortalsDemo extends Component {
    handClick=()=>{
        console.log(1111)
    }
    render() {
        return (
            <div onClick={this.handClick}>
                <Parent>
                    <Child/>
                </Parent>
            </div>
        )
    }
}

class Parent extends Component {
    render() {
        return ReactDOM.createPortal(
            this.props.children,//子节点
            document.querySelector('body')//被插入的对象
        )
    }
}


export default PortalsDemo