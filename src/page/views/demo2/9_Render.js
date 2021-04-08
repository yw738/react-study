import React, { Component } from "react"
/**
 * Render Props
 * 参考链接：
 * https://zh-hans.reactjs.org/docs/render-props.html
 * 术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
 * （人话：组件嵌套的时候子组件可以享用父组件的方法和属性）
 * 
 * 重要的是要记住，render prop 是因为模式才被称为 render prop ，
 * 你不一定要用名为 render 的 prop 来使用这种模式。事实上， 
 * 任何被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”.
 * 
*/

/**
 * 一下是两种render prop的使用方式。
*/
class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            str: '父组件'
        }
    }
    handClick = () => {
        this.setState(state => {
            console.log(state)
            return {
                str: `点击了父组件`
            }
        })
    }
    render() {
        return (
            <div>
                {this.props.children(this)}
            </div>
        )
    }
}
class Parent2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            str: '父组件2'
        }
    }
    render() {
        return (
            <div>
                {this.props.render(this.state)}
            </div>
        )
    }
}
class DemoProp extends Component {
    render() {
        return (
            <div >
                {/* 第一种 */}
                {/* render这个值，是可变的，render值变了Parent2组件内部对应的值也要修改。不可使用关键字。 */}
                <Parent2 render={item => (
                    <div>
                        <span>{item.str}</span>
                    </div>
                )} />
                {/* 第二种 */}
                {/* {this.props.children(this)} */}
                <Parent>
                    {item => (
                        <div>
                            <button onClick={item.handClick}>点我</button>
                            <span>{item.state.str}</span>
                        </div>
                    )}
                </Parent>
                
            </div>
        )
    }
}



export default DemoProp