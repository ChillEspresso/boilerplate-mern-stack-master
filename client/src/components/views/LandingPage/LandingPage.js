import React, { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';
import Axios from 'axios';
import { Button, Col, Card, Row} from 'antd';
import ImageSlider from '../../utils/ImageSlider';

const { Meta } = Card;

function LandingPage () {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [Loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {

    const variables = {
      skip: Skip,
      limit: Limit,
    }

    getProducts(variables)
  }, []);


  const getProducts = (variables) => {
    Axios.post('/api/product/getProducts', variables)
    .then(response => { 
        if (response.data.success) {
        setProducts([...Products, response.data.products]);
        setLoading(false);
        console.log(response.data.products);
        
      } else {
        alert('Failed to fetch products')
      }
    })
  }

  if(Loading) return <h1>Loading...</h1>

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
    }

    getProducts(variables)
  }

  const renderCards = Products.map((product, index) => {
    return <Col lg={6} md={8} xs={24}>
      <Card
        hoverable={true}
        cover={<ImageSlider images={product.images} />}
      >
      <Meta 
        title={product.title}
        description={`$${product.price}`}
      />
      </Card>
    </Col>
  })

  return (
    <div style={{ width: '75%', margin: '3rem auto' }}>
      <div style={{ textAlign:'center' }}>
        <h2> StarComm Furniture </h2>
      </div>

      {/* Filter */}



      {/* Search */}


      {Products.length === 0 ?
      <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center'}}>
        <h2>No post yet...</h2>
      </div>  :
      <div>
        <Row gutter={[16,16]}>
          {/* {Products.map((product, index) => {})} */}
          {renderCards}
        </Row>
      </div>
    }
    <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={onLoadMore}>Load More</Button>
      </div>

    </div>
  )
}

export default LandingPage
