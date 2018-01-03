import React from 'react';
import {Link} from 'react-router';
import {
    Row,
    Col,
    Menu,
    Icon,
    Button,
    Modal
} from
'antd';
import logo from '../images/logo.png';

const MenuItem = Menu.Item;
class NewsHeader extends React.Component{
    constructor(props){
        super(props);
        //初始化数据
        this.state = {
            key : "toutiao",
            userName : null,
            userId : null,
            isShow : false
        };
    }
    //定义点击MenuItem时的回调函数
    changeKey = ({item,key,keyPath}) => {
        this.setState({
           key
        });
    };
    render(){
        let {key,userName,userId,isShow} = this.state;
        let userItem = userName ?
            (//用户登录
                <MenuItem key = "userCenter" className="register">
                    <Button type="primary">{userName}</Button>&nbsp;
                    <Button type="dashed"><Link to="/user_center">个人中心</Link></Button>&nbsp;
                    <Button>退出</Button>
                </MenuItem>
            )
            :
            (//未登录
                <MenuItem key = "loginAndRegister" className="register">
                    <Icon type="appstore"/> 登录/注册
                </MenuItem>
            );
        return(
            <div>
                <Row>
                    <Col span={1}> </Col>
                    <Col span={3}>
                        <div className="logo">
                            <img src={logo} alt="ReactNews"/>
                            <span>ReactNews</span>
                        </div>
                    </Col>
                    <Col span={19}>
                        <Menu onClick={this.changeKey}  mode = "horizontal" selectedKeys={[key]}>
                            <MenuItem key = "toutiao">
                                <Icon type="appstore"/> 头条
                            </MenuItem>
                            <MenuItem key = "shehiu">
                                <Icon type="appstore"/> 社会
                            </MenuItem>
                            <MenuItem key="guonei">
                                <Icon type="appstore"/>国内
                            </MenuItem>
                            <MenuItem key="guoji">
                                <Icon type="appstore"/>国际
                            </MenuItem>
                            <MenuItem key="yule">
                                <Icon type="appstore"/>娱乐
                            </MenuItem>
                            <MenuItem key="tiyu">
                                <Icon type="appstore"/>体育
                            </MenuItem>
                            <MenuItem key="keji">
                                <Icon type="appstore"/>科技
                            </MenuItem>
                            <MenuItem key="shishang">
                                <Icon type="appstore"/>时尚
                            </MenuItem>
                            {userItem}
                        </Menu>
                        <Modal  title="用户中心" visible={isShow}></Modal>
                    </Col>
                    <Col span={1}> </Col>

                </Row>
            </div>
        )
    }
}

export default NewsHeader;