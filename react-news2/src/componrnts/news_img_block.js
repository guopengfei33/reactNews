import React from 'react';
import PropTypes from 'prop-types';

class NewsImgBlock extends React.Component{
    render(){
        return(
            <div>
                ...
            </div>
        )
    }
}

//规定传入数据的类型和必要性
NewsImgBlock.propTypes = {
    type : PropTypes.string.isRequired,
    count : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    imgWidth : PropTypes.string.isRequired,
    width : PropTypes.string.isRequired,
};
export  default NewsImgBlock;