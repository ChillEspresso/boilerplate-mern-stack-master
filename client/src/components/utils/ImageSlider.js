import React, {useState} from 'react';
import { Carousel } from 'antd';

function ImageSlider(props) {
  const [images, setImages] = useState([]);
  return (
    <div>
      <Carousel autoplay>
        {props.images.map((image, index) => (
          <div key={index}>
            <img style={{ width: '100%', maxHeight: '250px' }}
            src={`http://localhost:5000/${image}`} alt='productImage' />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageSlider
