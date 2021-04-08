import React, { Component } from "react"

/**
 * 高阶组件 HOC
 * 高阶组件是参数为组件，返回值为新组件的函数。
 * 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。
 * HOC 自身不是 React API 的一部分，
 * 它是一种基于 React 的组合特性而形成的设计模式。
 * 特点：
 * 1、可以把公共的逻辑抽出来，减少代码量
 * 2、HOC 是纯函数，没有副作用。不会改变原始组件。
 * 3、HOC 为组件添加特性。自身不应该大幅改变约定。HOC 返回的组件与原组件应保持类似的接口。
 * 
 * 注意事项：
 * 1、不要在 render 方法中使用 HOC
 * 2、务必复制静态方法
 * 3、Refs 不会被传递
*/
// 此函数接收一个组件...
const DataSource = {
    getBlogPost: (id) => id + "<=经过处理",
}
function withSubscription(WrappedComponent, selectData) {
    // ...并返回另一个组件...
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }
        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }
        render() {
            // ... 并使用新数据渲染被包装的组件!
            // 请注意，我们可能还会传递其他属性
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
}
class BlogPost extends Component {
    render() {
        let { data } = this.props;//处理过的data
        return (
            <div>
                被更改的数据:
                {data}
            </div>
        )
    }
}
const BlogPostWithSubscription = withSubscription(
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props.id)
);
class DemoF extends Component {
    render() {
        return (
            <div>
                生成的组件：
                <BlogPostWithSubscription
                    id={22}
                />
            </div>
        )
    }
}


export default DemoF