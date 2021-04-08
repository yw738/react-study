import React, { Component, Fragment } from "react"

/**
 * Fragment
 * Fragment组件是用于包裹子组件的，渲染的时候忽略Fragment组件。
 * 有两种用法，一个是“显式”和“隐式（短语法）”。
 * 显式：Fragment组件 包裹            可以在组件上加Key，不可以加属性。
 * 隐式（短语法）：<> </>，空标签包裹    不可以加key、加属性
*/

class DemoE extends Component {
    render() {
        return (
            <div>
                {
                    [1, 2, 3].map(item => {
                        return (
                            // 显式用法 可以加key，不可以加属性
                            <Fragment key={item}>
                                <div>aaa</div>
                            </Fragment>
                        )
                    })
                }
                <DemoE2 />
            </div>
        )
    }
}
class DemoE2 extends Component {
    render() {
        return (
            <>
                bbb
            </>
        )
    }
}

export default DemoE