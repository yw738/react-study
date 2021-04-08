import React, { Component, useState } from "react"
/**
 * ## useState hook 组件
*/
function DemoState(props) {
    const [isLogin, setLogin] = useState(false);
    const [count] = useState(0);
    return (
        <div>
            <div>
                计数器{count}
            </div>
            {isLogin ? '已登录' : '未登录'}
            {
                isLogin && (
                    <div>
                        user：{props.user}
                    </div>
                )
            }

            <button onClick={() => setLogin(isLogin ? false : true)}>
                切换登录状态
            </button>

        </div>
    )
}
/**
 * 普通组件
*/
const DemoOrdinary = () => (
    <div>
        我是普通组件
    </div>
)
class DemoA extends Component {
    render() {
        return (
            <div>
                {/* 普通组件 */}
                <DemoOrdinary />
                {/* hook组件 */}
                <DemoState
                    user={'张三'}
                />
            </div>
        )
    }
}

export default DemoA