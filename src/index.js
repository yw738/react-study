import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Home } from './page/home'
import './style.css'
import {homeApi} from "./api/api"
class App extends Component {
    componentWillMount(){
        homeApi().then(res=>{
            // console.log(res);
        })
    }

    render() {
        return (<div>
           <Home />
           {/* <Page1 /> */}
            <div className='active'>
                测试
           </div>
        </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));