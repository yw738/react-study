import React, { Component, StrictMode } from "react"
/**
 * 非受控表单
 * 参考链接：
 * https://zh-hans.reactjs.org/docs/uncontrolled-components.html
 * https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
 * 
 * 要编写一个非受控组件，而不是为每个状态更新都编写数据处理函数，你可以 使用 ref 来从 DOM 节点中获取表单数据。
 * 
 * 什么时候需要受控表单和非受控表单：
 * 
    特征	                    不受控制	受控
    一次性取值（例如在提交时）	     ✅	    ✅
    提交时验证	                    ✅	   ✅
    即时现场验证	                ❌	   ✅
    有条件地禁用提交按钮	        ❌	    ✅
    强制输入格式	                ❌	   ✅
    一个数据的多个输入	            ❌	   ✅
    动态输入	                   ❌	   ✅
*/

/**
 *用法
*/
class DemoStrictMode extends Component {
    render() {
        return (
            <div>11</div>
        )
    }
}



export default DemoStrictMode