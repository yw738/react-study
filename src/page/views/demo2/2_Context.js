import React, { Component } from "react"
/**
 * ## Context
 * 参考链接：
 * https://segmentfault.com/a/1190000017758300
*/

/**
 * 1、Context 提供了一个无需为每层组件手动添加 props，
 * 就能在组件树间进行数据传递的方法。
 * 2、Context 提供了一种在组件之间共享此类值的方式，
 * 而不必显式地通过组件树的逐层传递 props。
 * 
 * tips：类似 vue的inject和provide，爷孙组件传值
*/

/**
 * context 的 api
 * React.createContext 
 * Provider=>数据的生产者
 * Consumer=>数据的消费者
 * 再最外层的组件上，通过生产者Provider组件进行包裹，并存储共享数据到value中，当然可以是任何数据类型。
 * 后带需要用到共享数据的组件均可通过Consumer进行数据获取。
*/
const MyContext = React.createContext({
    aaa: '默认值=>111',
    bbb: '默认值=>222',
    cb: () => 1
});
const { Provider, Consumer } = MyContext;
// 父
class DemoB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aaa: 666,
            bbb: 777,
            cb: this.cbFn
        }
    }
    cbFn = () => {
        this.setState({
            bbb: 111
        })
    }
    render() {
        return (
            <div>
                {/* 只能传入一个值，这个值可以是对象 */}
                {/* 注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效。
                也就是说没有声明 Provider组件会启用 createContext 的默认值*/}
                <Provider value={this.state}>
                    <ChildA />
                </Provider>
                <DemoB2 />
            </div>
        )
    }
}
// 子|| 孙 
class ChildA extends Component {
    static contextType = MyContext
    // 在任意生命周期里面使用 context
    componentWillMount() {
        let value = this.context;
        console.log(value)
    }
    render() {
        return (
            <div>
                {/* 子：aaa属性 */}
                <Consumer>
                    {value => ('子:' + value.aaa)}
                </Consumer>
                {/* 子：bbb属性 */}
                <Consumer>
                    {value => ('子:' + value.bbb)}
                </Consumer>
                {/* 触发 父组件的回调事件 */}
                <Consumer>
                    {value => (
                        <button onClick={value.cb}>回调</button>
                    )}
                </Consumer>
            </div>
        )
    }
}


// 多个context组件 使用，使用嵌套
const MyContext2 = React.createContext();
const MyContext3 = React.createContext();
class DemoB2 extends Component {
    render() {
        let aaa = "context2";
        let bbb = "context3";
        return (
            <div>
                <MyContext2.Provider value={aaa}>
                    <MyContext3.Provider value={bbb}>
                        <ChildA2 />
                    </MyContext3.Provider>
                </MyContext2.Provider>
            </div>
        )
    }
}
// 子|| 孙 
class ChildA2 extends Component {
    render() {
        return (
            <div>
                {/* 子：aaa属性 */}
                <MyContext2.Consumer>
                    {item => (
                        <MyContext3.Consumer>
                            {value => (
                                <div>嵌套1：{item} ；嵌套2：{value}</div>
                            )}
                        </MyContext3.Consumer>
                    )}
                </MyContext2.Consumer>
            </div>
        )
    }
}


export default DemoB