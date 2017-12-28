import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

import App from './componrnts/App';
import NewsContainers from './componrnts/News_containers';
import NewsDetail from './componrnts/News_detail';
import UserCenter from './componrnts/User_center';
import './componentCss/pc.css';


ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={NewsContainers}/>
                <Route path='/news_detail/:newsId' component={NewsDetail}/>
                <Route path='/user_center' component={UserCenter}/>
            </Route>
        </Router>
    )
    ,document.getElementById('root'));
