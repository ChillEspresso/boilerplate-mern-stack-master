import React, {useState} from 'react'
import { Typography, Button, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;
const ProductType = [
  { key: 1, value: "CEO/Senior Executive" },
  { key: 2, value: "CEO/Senior Executive Guest" },
  { key: 3, value: "Senior Manager" },
  { key: 4, value: "Senior Manager Guest" },
  { key: 5, value: "Supervisor" },
  { key: 6, value: "Steno" },
  { key: 7, value: "Casheir high Chair" },
  { key: 8, value: "Restaurant Chair" },
  { key: 9, value: "Bar Chair" },
  { key: 10, value: "1 Seater" },
  { key: 11, value: "2 Seater" },
  { key: 12, value: "3 Seater" },
  { key: 13, value: "Cafeteria & Lunch Room Combination" },
]

function UploadProductPage(props) {

  const [TitleValue, setTitleValue] = useState("")
  const [DescriptionValue, setDescriptionValue] = useState("")
  const [PriceValue, setPriceValue] = useState(0)
  // const [ContinentValue, setContinentValue] = useState(1)
  const [productTypeValue, setProductTypeValue] = useState(1)

  const [Images, setImages] = useState([])

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value)
  }

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value)
  }

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value)
  }

  const onProductTypeSelectChange = (event) => {
    setProductTypeValue(event.currentTarget.value)
  }

  const updateImages = (newImages) => {
    setImages(newImages)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if(!TitleValue || !DescriptionValue || !PriceValue || !productTypeValue || !Images) {
      return alert('Fill all the fields first!')
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      productType: productTypeValue,
    }

    Axios.post('/api/product/uploadProduct', variables)
    .then(response => {
      if(response.data.success){
        alert('Product successfully uploaded')
        props.history.push('/')
      } else {
        alert('Failed to Upload Product')
      }
    })
  }
  
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style= {{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>Upload Product</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/* DropZone */}
        
        <FileUpload refreshFunction={updateImages}/>

        <br />
        <br />
        <label>Title</label>
        <Input 
          onChange={onTitleChange}
          value={TitleValue}
        />

        <br />
        <br />
        <label>Description</label>
        <TextArea 
          onChange={onDescriptionChange}
          value={DescriptionValue}
        />

        <br />
        <br />
        <label>Price($)</label>
        <Input 
          onChange={onPriceChange}
          value={PriceValue}
          type="number"
        />

        <br />
        <br />

        {/*Be sure the change this select from Continents to something else.*/}
        <select onChange={onProductTypeSelectChange}>
          {ProductType.map(item => (
            <option key={item.key} value={item.key}>{item.value} </option>
          ))}
        </select>

        <br />
        <br />

        <Button 
          onClick={onSubmit}
        >
          Submit
        </Button>

      </Form>
    </div>
  )
}

export default UploadProductPage
