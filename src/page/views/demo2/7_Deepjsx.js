import React, { Component } from "react"

/**
 * 深入jsx
 * 参考链接：
 * https://zh-hans.reactjs.org/docs/jsx-in-depth.html
 * 实际上，JSX 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖。
 * 1、React 必须在作用域内。
 * 2、在 JSX 类型中使用点语法
 * 3、用户定义的组件必须以大写字母开头
 * 4、在运行时选择类型，想通过通用表达式来（动态）决定元素类型，
 * 你需要首先将它赋值给大写字母开头的变量。
 * 5、jsx中的props 
 *      1)、可以使用js表达式作为props
 *      2)、props默认值为‘true’
 *      3)、可以属性展开
 * 6、JSX 中的子元素
 *      1）、字符串字面量，可以将字符串放在开始和结束标签之间
 *      2）、JSX 子元素，子元素允许由多个 JSX 元素组成
 *      3）、JavaScript 表达式作为子元素
 *      4）、函数作为子元素
 *      5）、布尔类型、Null 以及 Undefined 将会忽略，如果想渲染，需要转字符串
*/

class DemoJSX extends Component {
    render() {
        return (
            <div>
               
            </div>
        )
    }
}


export default DemoJSX