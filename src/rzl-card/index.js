import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/index.scss';
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
    return <div>Sorry, there was a problem loading the page.1www1</div>;
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
        <div>1111122222211
          <Route path="/:id" component={ABB} />
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


if (module.hot) {
  alert(1)
  module.hot.accept('/',() => {
    console.log('Accepting the updated printMe module!');
    console.log('121111111111222221111111111111');
    ReactDOM.render(<APP />, document.getElementById("app"));
  })
}