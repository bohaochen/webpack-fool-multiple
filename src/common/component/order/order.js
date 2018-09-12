import React from "react";
import { Switch, List, Icon, Toast } from "antd-mobile";
import "./order.less";
import API from "common/api/api";
import { directOrder } from "common/api/apiFn";
import Card from "common/component/card/card"
import { Route } from "react-router-dom";

export default class Roder extends React.Component {
  constructor() {
    super();
  }

  state = {
    show: false,
    data: {},
    hasAddress: false,
    isUseBalance: true,
  };

  componentWillMount() {
    var params = JSON.parse(window.localStorage.orderParams);


    console.log("params", params)

    directOrder(
      params.num,
      params.goodsSkuId,
      params.goodsId,
      params.userId,
      data => {
        if (data.errorCode == 0) {
          this.setState({
            showOrder: true,
            data: data.returnValue
          });
        } else {
          Toast.info(data.errorMsg);
          this.props.history.push("/");
        }
      }
    );
  }
  componentDidMount() {
    document.title = "确认订单";
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    document.getElementsByClassName("order_box")[0].style.overflow = "auto";
  }

  render() {
    const { show, hasAddress, data } = this.state;
    const Item = List.Item;
    const Brief = Item.Brief;
    let numFn = () => {
      var a = 0;
      if (data.orderItem) {
        data.orderItem.map((val, index) => {
          a += val.number
        })
        return a;
      }

    }
    return (
      <div className="order_box">
        <div className="address_box">
          {hasAddress ? (
            <div className="no_con">请添加收货信息</div>
          ) : (
              <div className="has_con">
                <div className="name">
                  <span className="name_t">王大大</span>
                  <span>18632458393</span>
                </div>
                <div className="address_text">
                  广东省深圳市南山区粤海街道高新南街道高新南街道高新南四道W2-A座6B
              </div>
              </div>
            )}
          <Icon type="right" className="right_click" />
        </div>

        <div className="items">
          {
            data.orderItem.map((val, index) => {
              return (
                <div className="item" key={index}>
                  <img src={API.imgPath + val.goodsPic} alt="" />
                  <div className="info_box">
                    <span className="title">
                      {val.goodsName}
                    </span>
                    <div className="info">{val.goodsDesc}</div>
                    <div className="price_box">
                      <span className="price">￥{val.orderAllotPrice}</span>
                      <span className="num">×{val.number}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="set_list">
          <List className="my-list">
            <Item extra={"+" + data.jimiBean}>吉米豆</Item>
            <Item extra={"+￥" + data.decVal1}>预计返利</Item>
            <Item extra={"￥" + data.amountPrice}>商品金额</Item>
            <Item extra={"满300减50元"} arrow="horizontal" onClick={() => {
              this.props.history.push(this.props.match.url + "/card")
            }}>
              优惠劵
            </Item>
            <Item extra={<Switch
              onChange={() => {
                this.setState({
                  isUseBalance: !this.state.isUseBalance
                })
              }}
              checked={this.state.isUseBalance}
              platform="ios"
              color="#FF2738"
            />}>
              可用抵扣余额￥{data.totalCouponsPrice}
            </Item>

            <Item extra={"￥" + data.postPrice}>邮费</Item>
            <Item extra={"￥" + data.paymentPrice}>总计</Item>
          </List>
        </div>

        <div className="pay_box">
          <span className="title">
            支付方式
            </span>
          <div className="item">
            <span className="icon wx">
              <img src={require("common/assets/img/pay.png")} alt="" />
            </span>
            <span className="pay_text">
              微信支付
              </span>
            <Icon type="check-circle" className="iconc active" />

          </div>
        </div>

        <div className="pay_btn">
          <div className="pay_info">
            共{
              numFn()
            }件，总计
                <span className="price">￥{data.paymentPrice}</span>
          </div>
          <div className="redBtn">
            支付订单
              </div>
        </div>
        <Route path="/order/card" component={Card}></Route>
      </div>
    );
  }
}

//默认订单地址？ 选优惠卷  选择优惠卷以后 商品价格变化？
