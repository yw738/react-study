import React, { Component } from 'react';
// import Demo1 from "./views/demo1/index.js"
// import Demo2 from "./views/demo2/index.js"
import Demo3 from "./views/demo3/index.js"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }
    render() {
        return (
            <div>
                <Demo3 />
            </div>
        )
    }
}
class Page1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 998
        }
    }
    render() {
        let { num } = this.state;
        return (
            <div>{num}</div>
        )
    }
}

// 1.定义class组件，为什么需要加上 super() ？
//      super的作用：super关键字，它指代父类的实例（即指代父类的this对象），子类没有自己的this对象，
//      而是继承父类的this对象。子类必须在constructor方法中调用super方法，从而得到父类的this对象，否则会报错。
// 2.super()加不加props的区别究竟在哪里呢？
//      需要在构造函数内使用this.props则在super()中添加props参数。
export { Home, Page1 }