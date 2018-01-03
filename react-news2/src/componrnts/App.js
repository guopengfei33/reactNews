import React,{Component} from 'react';
import {Link} from 'react-router';
import NewsHeader from './News_header';
import NewsFoolter from './News_foolter';

class App extends Component{
    render(){
        return(
            <div>
                <NewsHeader/>
                {this.props.children}
                <NewsFoolter/>
            </div>
        )
    }
}

export default App;