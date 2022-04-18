import React, { useState, useEffect } from 'react';
import { Link, useNavigate  } from "react-router-dom";
import axios from 'axios';
import Header from '../../Header/Header';
import './Home.css';
import SelectComponent from '../../components/SelectComponent';

function Home() {
    let navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [categoryName, setCategoryName] = useState("Categories");
    
    useEffect(() => {
        axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/')
            .then(response => {
                setProducts(response.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    const addProduct = () => {
        navigate('/add_product');
    }

    const removeProduct = (id) => {
        try {
            axios.delete(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`)
            .then(response => console.log(response))

            const remainingResults = products.filter(item => item.id !== id);
            setProducts(remainingResults)
        } catch(error) {
            console.log("error", error)
        }
    }

    const handleChange = (event) => {
        setFilteredProducts(products.filter(item => item.category === event.target.value));
        setCategoryName(event.target.value);
    };

    const searchInput = (event) => {
        setSearch(event.target.value);
    }
     
    return (
        <div className="container p-4">
           <Header />
           
           <div className='filter-area pt-4 pb-12'> 
                <input type="text" placeholder='Search product' onChange={(e) => searchInput(e) } className="rounded-md border-gray-300 shadow-sm gap-6 mt-1 block input-filter" />
                <SelectComponent handleChange={handleChange} />
            </div>
            <div className='product'>
                <ul className="grid grid-cols-4 gap-4">
                    {
                        categoryName !== "Categories" ? filteredProducts.filter(item => {
                            if(item.name.toLowerCase().includes(search.toLowerCase())) {
                                return item;
                            } else if(search === ""){
                                return item;
                            } else {
                                return null;
                            }
                        }).map(product =>
                            <li key={product.id}>
                                <button className='remove' onClick={() => removeProduct(product.id)}><h5 className='text-white'>Remove</h5></button>
                                <Link to={`/detail/${product.id}`}>
                                    <div className='image_wrap'>
                                        <img src={product.avatar} alt="" className="img" />
                                    </div> 
                                </Link>
                                <div className='product-name'>{product.name}</div>
                                <div className='price'>${product.price}</div>
                            </li>) : products.filter(item => {
                                if(item.name.toLowerCase().includes(search.toLowerCase())) {
                                    return item;
                                } else if(search === ""){
                                    return item;
                                } else {
                                    return null;
                                }
                            }).map(product => 
                            <li key={product.id}>
                                <button className='remove' onClick={() => removeProduct(product.id)}><h5 className='text-white'>Remove</h5></button>
                                <Link to={`/detail/${product.id}`}>
                                    <div className='image_wrap'>
                                        <img src={product.avatar} alt="" className="img" />
                                    </div> 
                                </Link>
                                <div className='product-name'>{product.name}</div>
                                <div className='price'>${product.price}</div>
                            </li>)
                    }
                </ul>

                <button onClick={addProduct} className="add-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 12 25" width="32px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                </button>
            </div>
        </div>
    )
}

export default Home;