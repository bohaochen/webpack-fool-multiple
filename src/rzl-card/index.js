import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import API from "./api/api";
import Axios from "axios";
import loadable from "react-loadable";

// import InfoPage from "./component/infoPage";

const loadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

const ABB = loadable({
  loader: () => import("./component/infoPage"),
  loading:loadingComponent
});

class APP extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/page/51">详情页</Link>
            </li>
            <li>
              <Link to="/classifiedDisplay">分类展示</Link>
            </li>
          </ul>
          <Route path="/page" component={ABB} />
        </div>
      </Router>
    );
  }
}

const requestFn = () => {
  return;
  Axios.get(API.cardInfo, {
    params: {
      app_version: 1,
      app_system: 1,
      id: 51
    }
  })
    .then(function(res) {
      console.log(res);

      if (res.data.code == "0") {
        console.log(res.data.data);
      } else {
        console.log(res.datam.sg);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
};

ReactDOM.render(<APP />, document.getElementById("app"));
