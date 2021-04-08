import React, { Component } from 'react';
// 生命周期、事件触发、条件渲染、循环
class Cycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            timer: null,
            num: '我是一个变量',
        }
    }

    componentWillMount() {
        console.log('页面开始挂载');
        let timer = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
        this.setState({
            timer: timer
        })
    }
    componentDidMount() {
        console.log('页面挂载完成')
    }
    componentWillUpdate() {
        // console.log('组件开始更新')
    }
    componentDidUpdate() {
        // console.log('组件更新完成')
    }
    componentWillUnmount() {
        console.log('页面准备销毁')
    }
    btn() {
        alert('这是使用band 更改this指向来触发事件')
        console.log('点击成功', this.state.num)
    }
    btn2 = () => {
        alert('这是 *实验性* 语法,触发事件')
        console.log('点击成功', this.state.num)
    }
    render() {
        let date = this.state.time.toLocaleTimeString();
        let arr = ['橘子','香蕉','象拔蚌','蛇皮'];
        let divArr = [<div key={1}>1</div>,<div key={2}>2</div>];
        // if(!this.props.isShow){
        //     return null;
        // }
        return (<div>
            <div>姓名：{this.props.name}</div>
            {/* tab 选项卡 */}
            <div>
                <span onClick={() => this.props.changeShow()}>点我切换:</span>
            </div>
            {
                this.props.isShow ? (<div className="tab_box">tab1</div>) : (<div className="tab_box">tab2</div>)
            }
            {
                arr&&arr.map((v,i)=>{
                    return (<div key={i}>{v}</div>)
                })
            }
            {divArr}
            <div>
                时间：{date}
            </div>
            <div>
                <button onClick={this.btn.bind(this)}>点我1</button>\
                <button onClick={this.btn2}>点我2</button>
            </div>
        </div>
        )
    }
}

export default Cycle