import React, { Component, useState, useEffect } from "react"
/**
 * ## useEffect hook 组件
*/
/**
 * 简介：
 * 1、你可以把 useEffect Hook 看做componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
 * 2、什么时候用？在可以告诉 React 组件需要在渲染后执行某些操作。这时候就可以用Effect。
 * 3、在组件内部调用 useEffect。将 useEffect 放在组件内部让我们可以在 effect 中直接访问 state 变量（或其他 props）。
 * 4、useEffect 会在每次渲染后都执行。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。但会保证在任何新的渲染前执行。
 * 在开始新的更新前，React 总会先清除上一轮渲染的 effect。
 * 
 * 5、可以使用多个 effect。这会将不相关逻辑分离到不同的 effect 中
 * 
 * 6、effect可以返回一个函数，在组件卸载的时候，会执行返回函数里面的代码。
 * 
 * 7、可以跳过effect 进行性能优化。只要传递数组作为 useEffect 的第二个可选参数即可
 * 
 * 8、如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。
 * 就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
 * 
*/
function DemoState() {
    const [count, setCount] = useState(0);
    const [aa, setAA] = useState(0);
    useEffect(()=>{
        console.log('第一个effect！');
    })
    //只会执行一次
    useEffect(()=>{
        console.log('第二个effect！且执行一次');
    },[])
    //添加第二个参数，更新 aa 变量的时候，不会更新该effect
    useEffect(() => {
        console.log('hook加载！！')
        document.title = `You clicked ${count} times`;
        return ()=>{
            console.log('hook组件卸载！！')
        }
    },[count])
    return (
        <div>
            <div>
                计数器{count}
            </div>
            <button onClick={() => setCount(count + 1)}>
                计数器+1
            </button>
            <div>demo:{aa}</div>
            <button onClick={() => setAA(aa+1)}>
                计数器不变
            </button>
        </div>
    )
}

class DemoB extends Component {
    constructor(props){
        super(props)
        this.state={
            isShow:true
        }
    }
    
    render() {
        return (
            <div>
                {/* hook组件 */}
                <button onClick={()=>this.setState({
                    isShow:!this.state.isShow
                })}>点我卸载组件</button>
                {this.state.isShow&&<DemoState />}
            </div>
        )
    }
}

export default DemoB