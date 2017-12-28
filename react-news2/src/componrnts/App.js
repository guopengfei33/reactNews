import React,{Component} from 'react';
import {Link} from 'react-router';

class App extends Component{
    render(){
        return(
            <div>
                <div>header</div>
                <p><Link to="/news_detail/1">新闻1</Link></p>
                <p> <Link to="/news_detail/2">新闻2</Link></p>
                <p> <Link to="/user_center">用户中心</Link></p>
                {this.props.children}
                <div>footer</div>
            </div>
        )
    }
}

export default App;