import React from 'react';

class NewsDetail extends React.Component{
    render(){
        return(
            <div>
                NewsDetail组件..........{this.props.params.newsId}
            </div>
        )
    }
}

export default NewsDetail;