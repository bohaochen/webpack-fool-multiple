import React from "react";
import { Carousel, WingBlank, Icon, Button } from "antd-mobile";
import "./Sku.less";
import API from 'common/api/api';

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
    canClick: false,
    num: 1,
    skuIds: "",
    SelectIDs: [],
    skuObj: {},
    skuMap:"",//反向的props.skuMap
  };
  closeFn = () => {
    console.log(0);
    document.body.style.overflow = "auto";
    this.setState({
      show: false
    });
  };

  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  setNum = type => {
    if (type == "up") {
      this.setState({
        num: (this.state.num += 1),
        canClick: true
      });
    } else {
      if (this.state.num == 1) {
        this.setState({
          canClick: false
        });
        return;
      } else {
        this.setState({
          num: (this.state.num -= 1)
        });
      }
    }
  };

  choseSkuId = (index, id) => {
    var arr = this.state.SelectIDs;
    var newArr=[];
    arr[index] = id;

    console.log(index,id,arr[index])
    for(var i=0;i<=index;i++){
        console.log(11111111)
        newArr.push(arr[i]);
    }
    console.log(newArr)

    this.setState(
      {
        SelectIDs: newArr
      },
      () => {
        console.log("SelectIDs", this.state.SelectIDs);
      }
    );
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.sku != nextProps.sku) {
      //处理SKU对象
      var skuObj = {};
      var newSkuMap = {};
      nextProps.sku.map((val1, index) => {
        var valArr = val1.itemIds.split("-");
        if(valArr[0]==107&&valArr[1]==111){
        }else{
            skuObj[valArr] = val1;
        }
        // skuObj[valArr] = val1;

      });
      newSkuMap=nextProps.skuMap.reverse();
      this.setState({
        skuObj: skuObj,
        skuMap:newSkuMap
      });
      console.log("skuObj", skuObj);
    }
  }

  render() {
    const { show } = this.state;
    return (
      <div className="sku_page" style={{ display: show ? "block" : "none" }}>
        <div className="sku_box_bg" />
        <div className="sku_con_box">
          <div className="sku_title_box">
            <div className="close_btn" onClick={this.closeFn}>
              <Icon type="cross" />
            </div>
            <div className="cont">
              <img src={this.props.skugoodsPic!=""?API.imgPath+this.props.skugoodsPic:require("../../assets/img/de.jpg")} alt="" />
              <div className="text">
                <span className="blackPrice">￥288</span>
                <span className="redPrice">会员价￥258.99</span>
                <div className="info_text">{this.props.skuName}</div>
              </div>
            </div>
          </div>
          <div className="sku_items">
            {this.state.skuMap &&
              this.state.skuMap.map((val, index) => {
                return (
                  <div className="sku_item" key={index}>
                    <div className="sku_item_title">{val.skuName}</div>
                    <div className="sku_item_select">
                      {val.goodsSkuMapItemResponse.map((ival, iIndex) => {
                        var classStr = "";
                        var canSelect = false;
                        var parentID = [];
                        this.state.SelectIDs.map(() => {});
                        if (this.state.SelectIDs.length < index) {
                          //如果当前层级大于已选层级，并且超过一层以上，则当前层级全部不可选
                          canSelect = false;
                        } else {
                          //如果当前层级小于已选层级，或者仅仅超过一层，则筛选可选ID,

                          for (var i = 0; i < index; i++) {
                              if(this.state.SelectIDs[i]!=undefined){
                                parentID.push(this.state.SelectIDs[i]);
                              }
                          }
                          parentID.push(ival.itemId)
                          console.log(ival.itemId+"--parentID",parentID)
                        //   console.log("this.state.skuObj[parentID]",this.state.skuObj[parentID])
                          if(this.state.skuObj[parentID]!=undefined){
                            console.log(ival.itemName)
                            canSelect=true
                          }
                
                        }
                   

                        return (
                          <span
                            key={iIndex}
                            className={
                              canSelect
                                ? this.state.SelectIDs[index] == ival.itemId
                                  ? "active"
                                  : ""
                                : "cantClick"
                            }
                            onClick={this.choseSkuId.bind(
                              this,
                              index,
                              ival.itemId
                            )}
                          >
                            {ival.itemName}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="sku_bottom">
            <div className="select_num">
              <span className="select_title">数量</span>
              <div className="select_con">
                <span
                  className={this.state.canClick ? "jian" : "jian cant"}
                  onClick={this.setNum.bind(this, "down")}
                >
                  -
                </span>
                <span className="shu">{this.state.num}</span>
                <span className="jian" onClick={this.setNum.bind(this, "up")}>
                  +
                </span>
              </div>
            </div>

            <div className="redBtn">确定</div>
          </div>
        </div>
      </div>
    );
  }
}
