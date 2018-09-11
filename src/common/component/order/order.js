import React from "react";
import { Carousel, WingBlank, Icon, Button } from "antd-mobile";
import "./order.less";
import API from "common/api/api";
import { directOrder } from "common/api/apiFn";


export default class Order extends React.Component {
    constructor() {
      super();
    }
  
    state = {
        show:false,
    };
    componentWillReceiveProps(nextProps){
        if(this.props.isShow!=nextProps.isShow){
            this.setState({
                show:nextProps.isShow
            })
        }
    }


    render(){
        const {show}=this.state;
        return(
            <div className="orderBox" style={{display:show?"block":"none"}}>
                    <div>   
                        adasdad
                    </div>
            </div>
        )
    }
}