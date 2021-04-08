import React, { Component } from "react"
import List from "./3_List"
import Form from "./1_form"
import StateUp from "./4_stateUp"
/**
 * demo1 主文件
 */ 
class Demo1 extends Component {
    render(){
        return (
            <div>
                <List/>
                <Form/>
                <StateUp/>
            </div>
        )
    }
}


export default Demo1