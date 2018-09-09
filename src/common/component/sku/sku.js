

import React from "react";
import { Carousel, WingBlank, Icon, Button } from "antd-mobile";
import "./Sku.less";


export default class Sku extends React.Component {

    constructor() {
        super();
    }

    state = {
        skuImg: "",
        skuTitle: "",
        skuPrice: "",
        payPrice: "",
        skuType: {},
        skuNum: "",
        show: true,
        canClick:false,
        num:1,
        skuIds:"",
        skuIdsArr:[],
        skuObj:{},
    }
    closeFn = () => {
        console.log(0)
        document.body.style.overflow = "auto";
        this.setState({
            show: false
        })
    }

    componentDidMount() {
        document.body.style.overflow = "hidden";
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.show != nextProps.show) {

        }
    }

    setNum = (type)=>{
        if(type=="up"){
            this.setState({
                num:this.state.num+=1,
                canClick:true
            })
        }else{
            if(this.state.num==1){
                this.setState({
                    canClick:false
                })
                return
            }else{
                  this.setState({
                    num:this.state.num-=1
                })
            }
          
        }
    }

    choseSkuId=(index,id)=>{
        var arr =this.state.skuIdsArr;
        arr[index]=id;
        this.setState({
            skuIdsArr:arr
        },()=>{
           console.log(this.state.skuIdsArr) 
        })
    }

    componentWillReceiveProps(nextProps){
        if(this.props.sku!=nextProps.sku){
           var skuObj={};
           var skuObjArr=[];
           var skuObjArr=[];
           nextProps.sku.map((val1,index)=>{
           skuObjArr.push(val1.itemIds.split("-"));
           })
           skuObjArr.map((val,index)=>{
            if(val.length==1){

            }
           })
        }
    }

    render() {
        const { show } = this.state;
        return (
            <div className="sku_page" style={{ display: show ? "block" : "none" }}>
                <div className="sku_box_bg">
                </div>
                <div className="sku_con_box">
                    <div className="sku_title_box">
                        <div className="close_btn" onClick={this.closeFn}>
                            <Icon type="cross" />
                        </div>
                        <div className="cont">
                            <img src={require("../../assets/img/de.jpg")} alt="" />
                            <div className="text">
                                <span className="blackPrice">
                                    ￥288
                                    </span>
                                <span className="redPrice">
                                    会员价￥258.99
                                    </span>
                                <div className="info_text">
                                {this.props.skuName}
                                    </div>

                            </div>

                        </div>
                    </div>
                    <div className="sku_items">
                        {
               
                            this.props.skuMap&&this.props.skuMap.map((val,index)=>{
                                return(
                                    <div className="sku_item" key={index}>
                                    <div className="sku_item_title">
                                        {val.skuName}
                                    </div>
                                    <div className="sku_item_select">
                                    {
                                        val.goodsSkuMapItemResponse.map((ival,iIndex)=>{
                                            return(
                                                <span key={iIndex} className={
                                                    this.state.skuIdsArr[index]==ival.itemId?"active":""
                                                    }
                                                     onClick={this.choseSkuId.bind(this,index,ival.itemId)}>
                                                    {ival.itemName}
                                                </span>
                                            )
                                        })
                                    }
                                        <span className="active">
                                            柠檬
                                        </span>
                                        <span className="cantClick">
                                            水蜜桃
                                        </span>
                                        <span>
                                            西瓜
                                        </span>
                                      
                                    </div>
                                </div>
                                )
                            })
                        }
                        <div className="sku_item">
                            <div className="sku_item_title">
                                味道
                            </div>
                            <div className="sku_item_select">
                                <span className="active">
                                    柠檬
                                </span>
                                <span className="cantClick">
                                    水蜜桃
                                </span>
                                <span>
                                    西瓜
                                </span>
                                <span>
                                    葡萄
                                </span>
                                <span>
                                    葡萄
                                </span><span>
                                    葡萄
                                </span><span>
                                    葡萄
                                </span><span>
                                    葡萄
                                </span>
                            </div>
                        </div>
                        <div className="sku_item">
                            <div className="sku_item_title">
                                味道
                            </div>
                            <div className="sku_item_select">
                                <span className="active">
                                    柠檬
                                </span>
                                <span className="cantClick">
                                    水蜜桃
                                </span>
                                <span>
                                    西瓜
                                </span>
                                <span>
                                    葡萄
                                </span>
                            </div>
                        </div>

                    </div>


                    <div className="sku_bottom">
                        <div className="select_num">
                            <span className="select_title">数量</span>
                            <div className="select_con">
                                <span className={this.state.canClick?"jian":"jian cant"} onClick={this.setNum.bind(this,"down")}>-</span>
                                <span className="shu">
                                {this.state.num}
                                </span>
                                <span className="jian" onClick={this.setNum.bind(this,"up")}>+</span>
                            </div>
                        </div>

                        <div className="redBtn">
                            确定
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}
