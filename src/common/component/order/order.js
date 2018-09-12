import React from "react";
import { Carousel, List, Icon, Toast } from "antd-mobile";
import "./order.less";
import API from "common/api/api";
import { directOrder } from "common/api/apiFn";

export default class Roder extends React.Component {
  constructor() {
    super();
  }

  state = {
    show: false,
    hasAddress: false
  };

  componentWillMount() {
    console.log(this.props);
    if (this.props.location.state == undefined) {
      this.props.history.push("/");
      return;
    }
    var params = this.props.location.state;

    directOrder(
      params.num,
      params.goodsSkuId,
      params.goodsId,
      params.userId,
      data => {
        if (data.errorCode == 0) {
          this.setState({
            showOrder: true
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

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
  }

  render() {
    const { show, hasAddress } = this.state;
    const Item = List.Item;
    const Brief = Item.Brief;

    return (
      // <div className="sku_page" style={{ display: show ? "block" : "none" }}>
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
          <div className="item">
            <img src={require("common/assets/img/de.jpg")} alt="" />
            <div className="info_box">
              <span className="title">
                澳洲2010原瓶进口奔富酒庄BIN28卡琳娜西拉富酒庄BIN28卡琳娜西拉富酒庄BIN28卡琳娜西拉干红750ml/瓶
              </span>
              <div className="info">水蜜桃；标准口味1箱</div>
              <div className="price_box">
                <span className="price">￥259.9</span>
                <span className="num">×10</span>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={require("common/assets/img/de.jpg")} alt="" />
            <div className="info_box">
              <span className="title">
                澳洲2010原瓶进口奔富酒庄BIN28卡琳娜西拉富酒庄BIN28卡琳娜西拉富酒庄BIN28卡琳娜西拉干红750ml/瓶
              </span>
              <div className="info">水蜜桃；标准口味1箱</div>
              <div className="price_box">
                <span className="price">￥259.9</span>
                <span className="num">×10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="set_list">
          <List className="my-list">
            <Item extra={"extra content"}>吉米豆</Item>
            <Item extra={"extra content"}>预计返利</Item>
            <Item extra={"extra content"}>商品金额</Item>
            <Item extra={"满300减50元"} arrow="horizontal" onClick={() => {}}>
              优惠劵
            </Item>
            <Item extra={"extra content"}>邮费</Item>
            <Item extra={"extra content"}>总计</Item>
          </List>
        </div>

        <div className="pay_box">
            <span className="title">
              支付方式
            </span>
            <div className="item">
              <span className="icon wx">
                <img src={require("common/assets/img/pay.png")} alt=""/>
              </span>
              <span className="pay_text">
                微信支付
              </span>
          <Icon type="check-circle" className="iconc active" />

            </div>
        </div>
      </div>
    );
  }
}
