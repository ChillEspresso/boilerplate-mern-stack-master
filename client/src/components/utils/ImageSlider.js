import React, {useState} from 'react';
import ReactDom from 'react-dom';
import { Carousel } from 'antd';

function ImageSlider(props) {
  const images = useState([]);

  return (
    <div>
      {/* <Carousel autoplay>
        {props.images.map((image, index) => (
        <div key={index}>
          <img src={`http://localhost:5000/${image}`} alt="productImage" style={{ width: '100%', maxHeight: '250px' }}></img>
        </div>
        ))}
      </Carousel> */}

      <Carousel autoplay>
        {props.images.map((image, index) => (
        <div key={index}>
            <img src={`http://localhost:5000/${image}`} alt="productImage" style={{ width: '100%', maxHeight: '250px' }}/>
        </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageSlider
