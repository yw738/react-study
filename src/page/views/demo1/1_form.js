import React, { Component } from "react"
// 受控表单
class FormTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            selectValue: '2'
        }
    }
    handleChange = (event) => {
        let name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (<form onSubmit={this.handleSubmit}>
            {/* 受控组件 */}
            <input type="text" value={this.state.value} name="value" onChange={this.handleChange} />
            <input type="text" value={this.state.value1} name="value1" onChange={this.handleChange} />
            <select value={this.state.selectValue} onChange={(event) => this.setState({
                selectValue: event.target.value
            })}>
                <option value="1">选项1</option>
                <option value="2">选项2</option>
                <option value="3">选项3</option>
            </select>
            <input type="submit" value="提交" />

            <textarea value={this.state.value3} name="value3" onChange={this.handleChange} rows="10" />
        </form>)

    }
}
export default FormTab;