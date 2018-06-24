import React from "react";
import { Route } from "react-router-dom";
import { Carousel, WingBlank, Icon, Button } from "antd-mobile";
import { GetCardInfo } from '../api/apiFn';

export default class InfoPage extends React.Component {
  constructor() {
    super();
  }

  state = {
    data: [],
    isOver: true,
    isFc:true,
    isScroll: false,
    imgHeight: 375
  };

  gotoTop=()=>{
    if(this.state.isScroll){
      window.scrollTo(0, 0);
    }
  }
  
  hideFcFn=()=>{
    this.setState({
      isFc:false,
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentDidMount() {
    var _this = this;
    window.addEventListener('scroll', () => {
      clearTimeout("isScrollFn")
      if (!this.state.isScroll) {
        this.setState({
          isScroll: true
        })
        window.isScrollFn = setTimeout(()=>{
          this.setState({
            isScroll: false
          })
        },2000)
      }
    })

    GetCardInfo(1, 1, 51)
    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
        ]
      });
    }, 100);
  }

  render() {
    return (
      <div className="card-page">
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) =>
              console.log(`slide from ${from} to ${to}`)
            }
            afterChange={index => console.log("slide to", index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100%"
                }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: "100%", verticalAlign: "top" }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event("resize"));
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
        <div className="infoBox">
          <div className="priceBox">
            <span className="rightPrice">￥288</span>
            <span className="oldPrice">￥350</span>
            <span className="jfInfo">赚1积分</span>
          </div>
          <div className="infoContent">
            <span className="infoTitle">
              澳洲红酒干红来爱爱爱爱爱我爱爱爱爱我爱爱爱爱爱爱澳洲红酒干红来爱爱爱爱爱我爱爱爱爱我爱爱爱爱爱爱爱啊1729ml/瓶
              </span>
            <span className="infoC">
              在安达市大所大所大所大所多在安达市大所大所大所大所多在安达市大所大所大所大所多在安达市大所大所大所大所多在安达市大所大所大所大所多在安达市大所大所大所大所多
                在安达市大所大所大所大所多在安达市大所大所大所大所多在安达市大所大所大所大所多在安达市大所大所大所大所多在安达市大所大所大所大所多在安达市大所大所大所大所多
              </span>
          </div>
          <div className="labelBox">
            <span className="labelItem">
              <Icon type="check-circle-o" size={"xxs"} />
              <span>包邮</span>
            </span>
            <span className="labelItem">
              <Icon type="check-circle-o" size={"xxs"} />
              <span>包邮</span>
            </span>
            <span className="labelItem">
              <Icon type="check-circle-o" size={"xxs"} />
              <span>包邮</span>
            </span>
          </div>
        </div>
        <div className="pageContent">
          <img src={require("../assets/img/timg.jpg")} alt="" />
        </div>
        <div className="pageFoot">
          <div className={this.state.isOver ? "cantClickBtn" : "redBtn"}>
            <Button type="primary" disabled={this.state.isOver ? true : false} className="btncss">加入购物车</Button>
          </div>
        </div>
        <div className="toastBox">
          <span>来晚了，商品已经下架啦~</span>
        </div>
        <div className={this.state.isScroll ? "gotoTop showView" : "gotoTop hiddenView"} onClick={this.gotoTop}>
          <img src={require("../assets/img/toTop.png")} alt="" />
        </div>
        <div className="fc" style={{display:this.state.isFc?"block":"none"}} onClick={this.hideFcFn}>
            <div className="text">
              <span>请点击右上角按钮，</span>
              <span>选择【在浏览器中打开】</span>
            </div>
            <img src={require("../assets/img/jt.png")} alt=""/>
        </div>
      </div>
    );
  }
}


