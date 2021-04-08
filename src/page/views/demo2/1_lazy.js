import React, { Component, Suspense } from "react"
/**
 * ## 代码分割
*/

/**
 * 使用import() 来实现代码分割，webpack解析到该语法，会自动进行代码切割。
 * 
 * 引用之前：
 * import { add } from './math';
 * console.log(add(16, 26));
 * 
 * 引用之后：
 * import("./math").then(math => {
 *  console.log(math.add(16, 26));
 * });
 */

/**
 * ##React.lazy
 * 函数能让你像渲染常规组件一样处理动态引入（的组件）。
 * 使用之前：
 * import OtherComponent from './OtherComponent';
 * 
 * 使用之后：
 * const OtherComponent = React.lazy(() => import('./OtherComponent'));
 * 
*/

/**
 * 假设的 异步组件
 */
class DemoSync extends Component {
    render() {
        return (
            <div>
                我是要异步引入的组件
            </div>
        )
    }
}
// const DemoSync = React.lazy(() => import("./1_1"))
/**
 * Suspense 是用来优化整个页面交互 的内置组件
*/
class DemoA extends Component {
    render() {
        return (
            <div>
                {/*Suspense组件的 fallback 属性接受任何在组件加载过程中你想展示的 React 元素 */}
                <Suspense fallback={<div>loading</div>}>
                    <DemoSync />
                </Suspense>
            </div>
        )
    }
}

/**
 * 基于路由的代码分割
 * import React, { Suspense, lazy } from 'react';
 * import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 * 
 * const Home = lazy(() => import('./routes/Home'));
 * const About = lazy(() => import('./routes/About'));
 * 
 * const App = () => (
 *   <Router>
 *     <Suspense fallback={<div>Loading...</div>}>
 *      <Switch>
 *         <Route exact path="/" component={Home}/>
 *         <Route path="/about" component={About}/>
 *       </Switch>
 *     </Suspense>
 *   </Router>
 * );
*/

export default DemoA