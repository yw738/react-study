import React, { Component } from "react"

/**
 * 状态提升
 * 逻辑：
 * 父组件传递一个方法给子组件，当子组件需要更新数据的时候，调用父组件的方法，在父组件进行数据更新，
 * 因为单向数据流（自上而下的数据流）的缘故，从而实现下层组件更新数据
 * tips：参考vue 的 父传子 ，如果是子传父的话，用回调函数
 * 
 * 好处：排查和隔离 bug 所需的工作量将会变少。
*/
// 上层组件（父组件）
class StateUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            value2: 0,
            allValue: 0
        }
    }
    /**
     * 父组件 准备传递给 子组件的方法 
     * @params name 绑定的name名
     * @params value 绑定的值
    */
    FqChangeValue = async (name, value) => {
        await (this.setState({
            [name]: parseInt(value)
        }))
        this.setState({
            allValue: this.state.value + this.state.value2
        })
    }
    render() {
        return (<div>
            <Jia value={this.state.value} name="value" FqChangeValue={this.FqChangeValue} />
            +
            <Jia value={this.state.value2} name="value2" FqChangeValue={this.FqChangeValue} />
            =
            {/* jsx组合实例，通过this.props.children实现 */}
            <He value={this.state.allValue} left={left()} right={right()}>
                {/* 插槽 */}
                <div>和：</div>
            </He>
        </div>)
    }
}
// 下层组件（子组件）
class Jia extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    /**
     * 监听 输入框变动 调用父组件的方法 更新数据
    */
    changeValue = (event) => {
        let value = event.target.value || 0;
        let name = event.target.name;
        this.props.FqChangeValue(name, value);
    }
    render() {
        return (<div>
            <input type="text" value={this.props.value} name={this.props.name} onChange={this.changeValue} />
        </div>)
    }
}


class He extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>

            {this.props.children}
            {this.props.value}

            {this.props.right}
            {this.props.left}
        </div>)
    }
}

/**
 * 插槽 1
*/
function left() {
    return (<span>left组件</span>)
}
/**
 * 插槽 2
*/
function right() {
    return (<span>right组件</span>)
}


export default StateUp