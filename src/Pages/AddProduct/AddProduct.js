import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate  } from "react-router-dom";
import Header from '../../Header/Header';
import axios from 'axios';
import './AddProduct.css';
import SelectComponent from '../../components/SelectComponent';

function AddProduct() {
    let navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const [category, setCategory] = useState("")

    
    const onSubmit = (product) => {
        product = {...product, category, developerEmail: 'halit_balcikli@hotmail.com'};
        axios.post('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products', product)
            .then(response => {
                if(response) {
                    navigate('/');
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

     const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
    <React.Fragment>
        <div className="container p-4">
            <Header />
            <div className="flex justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="antialiased text-gray-900 px-6 outer-area">
                        <div className='max-w-l form-area'>
                            <h1 className='text-xl leading-8 text-center create-product-text'>Create Product</h1>
                            <div className='grid py-1 gap-6'>
                                <input type="text" className="rounded-md border-gray-300 shadow-sm gap-6 mt-1 block" placeholder="Product Name" {...register('name')} />
                            </div>
                            <div className='grid py-1 gap-6'>
                                <textarea className="rounded-md border-gray-300 shadow-sm gap-6 mt-1 block" placeholder="Description" {...register('description')} />
                            </div>
                            <div className='grid py-1 gap-6'>
                                <input type="text" className="rounded-md border-gray-300 shadow-sm gap-6 mt-1 block" placeholder="Image URL" {...register('avatar')} />
                            </div>
                            <div className='grid py-1 gap-6'>
                                <SelectComponent handleChange={handleChange} />
                            </div>
                            <div className='grid py-1 gap-6'>
                                <input type="text" className="rounded-md border-gray-300 shadow-sm gap-6 mt-1 block" placeholder="Price" {...register('price')} />
                            </div>
                            <button type="submit" className="rounded-md border-gray-300 shadow-sm gap-6 mt-1 block submit-button" value="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </React.Fragment>
    )
}

export default AddProduct;