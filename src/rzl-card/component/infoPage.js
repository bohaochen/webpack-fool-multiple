import React from 'react'
import { Route } from 'react-router-dom';
import ABBaa from './test'


export default class InfoPage extends React.Component{
    constructor(){
        super()
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }

    componentDidMount(){
        console.log(this.props.match)
    }

    render(){
        return(
            <div>
                这个是详情页面
                {/* {this.props.match} */}
                <Route path={`${this.props.match.url}/:topicId`} component={ABBaa}/>
                {/* <Route exact path={match.url} render={() => (
                <h3>请选择一个主题。</h3>
                )}/> */}
                111
                <br/>
                <ABC></ABC>
            </div>
        )
    }
}

class ABC extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>小阿拉啦啦啦啦</div>
        )
    }
}