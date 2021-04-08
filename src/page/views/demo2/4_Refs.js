import React, { Component } from "react"

/**
 * Refs 转发
 * 参考链接：
 * https://segmentfault.com/a/1190000015113359
*/
/**
 * why?
 * 凡事总有例外，总会有一些很奇葩的时候我们需要直接去操作页面的真实DOM，
 * 这就要求我们有直接访问真实DOM的能力，而Refs就是为我们提供了这样的能力。
 * 看这个名字也知道，Refs其实是提供了一个对真实DOM（组件）的引用，我们可以
 * 通过这个引用直接去操作DOM（组件）
 * 
 * when?
 * 1、管理焦点，文本选择或媒体播放。
 * 2、触发强制动画。
 * 3、集成第三方 DOM 库。
 * 避免使用 refs 来做任何可以通过声明式实现来完成的事情。
 * 举个例子，避免在 Dialog 组件里暴露 open() 和 close() 方法，最好传递 isOpen 属性。
 * 
 * how
 * ref 的值根据节点的类型而有所不同：
 * 1、当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
 * 2、当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
 * 3、你不能在函数组件上使用 ref 属性，因为他们没有实例。但可以在函数组件内部使用 ref 属性。
*/
/**
 * 简单demo，推荐使用React.createRef api （第二种方式）来控制原生DOM
*/
class DemoD extends Component {
    constructor(props) {
        super(props)
        this.inputRef2 = React.createRef();//创建refs的第二种方式
    }
    //方式1
    clickFn1 = () => {
        this.refs.inputRef.focus();
    }
    //方式2 
    clickFn2 = () => {
        this.inputRef2.current.focus();
    }
    render() {
        return (
            <div>
                <div>
                    点击按钮通过ref获取原生dom设置焦点
                </div>
                <div>
                    <input type="text" ref="inputRef" />
                    <button onClick={this.clickFn1}>点我（type 1）</button>
                </div>
                <div>
                    <input type="text" ref={this.inputRef2} />
                    <button onClick={this.clickFn2}>点我（type 2）</button>
                </div>
                <ForwardRef />
            </div>
        )
    }
}


/**
 *  React.forwardRef 在HOC（高阶组件）的应用
*/

function logProps(Component) {
    class LogProps extends React.Component {
        render() {
            const { forwardedRef, ...rest } = this.props;
            return <Component ref={forwardedRef} {...rest} />
        }
    }
    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />
    })
}

class ChildC extends Component {
    render() {
        return (
            //  {/* 通过 logProps 方法绑定父组件的ref，通过回调函数，使父组件操作子组件的原生DOM*/}
            // 此时操作的是div这个原生DOM，如果要访问 input这个DOM可以使用 ：
            // 父组件的ref名.current.refs.子组件的ref名 => hocRef.current.refs.asdRef
            <div>
                <input type="text" ref="asdRef" />
                <button onClick={this.props.handClick}>{this.props.label}</button>
            </div>
        )
    }
}

let AAA = logProps(ChildC);//生成一个新组件，使用方法如下

/**
 * 通过 React.forwardRef api 进行父组件控制子组件的原生DOM
*/
const hocRef = React.createRef();
class ForwardRef extends Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef();
    }
    handClick = () => {
        hocRef.current.refs.asdRef.focus();
    }
    render() {
        return (
            <div>
                <FancyButton ref={this.ref}>click me</FancyButton>
                <AAA
                    label="点我获取焦点"
                    handClick={this.handClick}
                    ref={hocRef}
                />
            </div>
        )
    }
}

/**
 * React.forwardRef 的普通使用
*/
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} >
        {props.children}
    </button>
));
export default DemoD