import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Header/Header';
import './Detail.css'

function Detail() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, [id])
    
    return (
        <div className="container p-4">
            <Header />
            <div className='product-details'>
                <div className='image-wrapper'>
                    <img src={product.avatar} alt="" className="product-image"></img>
                    <div className='min-w-full'>
                        <h3 className="min-w-full product-name">{product.name}</h3>
                        <h3 className="product-price">$ {product.price}</h3>
                    </div>
                </div>
                <h2 className='title'>Description</h2>
                <div className='description'>{product.description}</div>
            </div>
        </div>
    ) 
}

export default Detail;