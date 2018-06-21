import React from "react";
import { Route } from "react-router-dom";
import { Carousel, WingBlank } from "antd-mobile";

import ABBaa from "./test";

export default class InfoPage extends React.Component {
  constructor() {
    super();
  }

  state = {
    data: ["1", "2", "3"],
    imgHeight: 176
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentDidMount() {
    console.log(this.props.match);
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
        <Route path={`${this.props.match.url}/:topicId`} component={ABBaa} />
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
                  height: this.state.imgHeight
                }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: "100%", verticalAlign: "top" }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event("resize"));
                    this.setState({ imgHeight: "auto" });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>

        <div className="testClass">
          <img src={require("../assets/img/timg.jpg")} alt="" />
        </div>
      </div>
    );
  }
}

class ABC extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>小阿拉啦1啦啦啦</div>;
  }
}
