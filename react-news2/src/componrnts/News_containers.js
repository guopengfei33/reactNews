import React from 'react';
import
    {Row, Col,Carousel}
from 'antd';

import NewsImgBlock from './news_img_block';

import carousel from '../images/carousel_1.jpg';
import carouse2 from '../images/carousel_2.jpg';
import carouse3 from '../images/carousel_3.jpg';
import carouse4 from '../images/carousel_4.jpg';

import '../componentCss/news_conrainers.css';
class NewsContainers extends React.Component{
    render(){
        return(
            <div className="news_container">
               <Row>
                   <Col span={1}/>
                   <Col span={22}>
                       <div className="leftContainer1">
                           {/*设置轮播图*/}
                           <Carousel autoplay>
                               <div><img src={carousel} alt=""/></div>
                               <div><img src={carouse2} alt=""/></div>
                               <div><img src={carouse3} alt=""/></div>
                               <div><img src={carouse4 } alt=""/> </div>
                           </Carousel>
                           <NewsImgBlock type="guoji" count={6} title="国际新闻" imgWidth="120px" width="100%"/>
                       </div>
                   </Col>
                   <Col span={1}/>
               </Row>
            </div>
        )
    }
}

export default NewsContainers;