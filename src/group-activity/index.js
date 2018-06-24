import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import loadable from "react-loadable";
import LoadView from "./component/loading"
import 'amfe-flexible'

import './assets/css/index.less';
// import './assets/css/index.css';

// import InfoPage from "./component/infoPage";
const loadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return (
        <LoadView/>
    );
  }
  // Handle the error state
  else if (error) {
    
    return (<div>呃，正在升级.</div>);
  } else {
    return null;
  }
};

const InfoPage = loadable({
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
          <Route path="/:id" component={InfoPage} />
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<APP />, document.getElementById("app"));


if (module.hot) {
  module.hot.accept('/',() => {
    console.log('Accepting the updated printMe module!');
    console.log('121111111111222221111111111111');
    ReactDOM.render(<APP />, document.getElementById("app"));
  })
}