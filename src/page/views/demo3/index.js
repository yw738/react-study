import React, { Component } from "react"
import DemoA from "./1_useState"
import DemoB from "./2_useEffect"


/**
 * demo3 主文件
 */
class Demo2 extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <DemoA />
                <DemoB />
            </div>
        )
    }
}


export default Demo2