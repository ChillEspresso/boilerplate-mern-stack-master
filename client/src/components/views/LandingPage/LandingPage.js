import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import Axios from 'axios';

function LandingPage() {

    const [Products, setProducts] = useState([])

    useEffect(() => {
    Axios.post('/api/porduct/getProducts')
    .then(response => {
        if(response.data.success){

        } else {
            alert('Failed to fetch products')
        }
    })
    }, [])
    
    return (
        <>
            
        </>
    )
}

export default LandingPage
