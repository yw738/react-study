import React, { Component } from "react"

/**
 * 错误边界
 * 
 * JavaScript 错误不应该导致整个应用崩溃，为了解决这个问题，推出了新的概念 —— 错误边界。
 * 如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch()
 * 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，请使用 
 * static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息。
 * 参考链接：
 * https://zhuanlan.zhihu.com/p/103487621
*/
/**
 * 注：有些错误是无法捕捉到的
 * 1、组件自身的错误
 * 2、事件中的错误比如：onClick
 * 3、异步3事件中的错误比如：settimeout
 * 也就是说"仅能处理子组件的同步错误"
*/
class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    错误边界成功捕获异常！！！
                </div>
            )
        }
        return this.props.children
    }
}

class Child extends Component {
    // 无法捕获事件错误
    clickFn = () => {
        throw Error("ERR");
    }
    componentDidMount() {
        // 无法捕获 异步错误
        // setTimeout(() => {
        //     throw Error("ERR");
        // }, 1000);
    }
    render() {
        // 无法捕获组件发生的错误
        // throw Error("ERR");
        return (
            <ErrorBoundary>
                <span onClick={this.clickFn}>
                    点我报错
                    {/* 只能捕获渲染时子组件发生的的同步错误 */}
                    {Error("ERR")}
                </span>
            </ErrorBoundary>
        )
    }
}

class DemoC extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Child />
            </ErrorBoundary>
        )
    }
}


export default DemoC