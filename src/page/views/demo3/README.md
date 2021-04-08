
##demo3
react Hook
how?
Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。例如，useState 是允许你在 React 函数组件中添加 state 的 Hook。

why？
1、在组件之间复用状态逻辑很难
2、复杂组件变得难以理解
3、难以理解的 class

when?
如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其转化为 class。

hook使用规则：
1、只在最顶层使用 Hook，不要在循环，条件或嵌套函数中调用 Hook。会导致 bug 的产生。
2、只在 React 函数中调用 Hook，不要在普通的 JavaScript 函数中调用 Hook。

自定义hook的规则：
1、Hook 组件命名必须以 “use” 开头。

目录：
1、使用 State Hook
2、使用 Effect Hook

其他hook参考链接：
https://zh-hans.reactjs.org/docs/hooks-reference.html

