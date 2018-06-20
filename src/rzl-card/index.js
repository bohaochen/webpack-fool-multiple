import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import API from './api/api';
import Axios from 'axios';

class APP extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
       <Router >
         <div>
          <ul className="nav navbar-nav">
              <li><Link to="/" replace>首页</Link></li>
              <li><Link to="/classifiedDisplay" replace>分类展示</Link></li>
              <li><Link to="/boutiqueCase" replace>精品案例</Link></li>
              <li><Link to="/aboutUs" replace>关于我们</Link></li>
          </ul>
          <Route exact path="/" component={ABB}/>
          <Route exact path="/classifiedDisplay/" component={ABB1}/>
          <Route exact path="/boutiqueCase/" component={ABB2}/>
          <Route exact path="/aboutUs/" component={ABB3}/>
          </div>
   
     
       </Router>
    )
   
  }
}

const requestFn = ()=>{
  Axios.get(API.cardInfo,{
    params:{
      app_version:1,
      app_systrm:1,
      id:51
    }
  }).then(function(res){
    console.log(res)
  }).catch(function(err){
    console.log(err)
  })
}

const ABB =()=>(
  <div> 首页</div>
) 
const ABB1 =()=>(
  <div> 分类展示</div>
) 
const ABB2 =()=>(
  <div> 精品案例</div>
) 
const ABB3 =()=>(
  <div> 关于我们

    <span onClick={requestFn}>111</span>
  </div>
) 
  ReactDOM.render(
    <APP />,
    document.getElementById('app')
  );
  