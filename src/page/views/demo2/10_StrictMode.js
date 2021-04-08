import React, { Component, StrictMode } from "react"
/**
 * StrictMode 严格模式
 * 参考链接：
 * https://zh-hans.reactjs.org/docs/strict-mode.html
 * StrictMode 是一个用来突出显示应用程序中潜在问题的工具。
 * 与 Fragment 一样，StrictMode 不会渲染任何可见的 UI。
 * 它为其后代元素触发额外的检查和警告。
 * why？
 * 1、识别不安全的生命周期
 * 2、关于使用过时字符串 ref API 的警告
 * 3、关于使用废弃的 findDOMNode 方法的警告
 * 4、检测意外的副作用
 * 5、检测过时的 context API
*/

/**
 *用法
*/
class DemoStrictMode extends Component {
    render() {
        return (
            <StrictMode>
                启用了的react的严格模式
            </StrictMode>
        )
    }
}



export default DemoStrictMode