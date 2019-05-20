import React from 'react'
import { Row,Col,Typography,List } from 'antd';
import { Card, Icon, Avatar } from 'antd';
import Picture from './picture.jpg';
import { Carousel } from 'antd';
import '../Slide.css';

const { Meta } = Card;
const { Title } = Typography;
  
class Home extends React.Component{       
    render(){
        return(

            <Carousel autoplay>
                <div>
                <img alt="example" src={Picture} />
                </div>
            </Carousel>
            );         
        
    }
}

export default Home;