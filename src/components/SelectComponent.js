import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SelectComponent = ({ handleChange } ) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/')
            .then(response => {    
                response.data.unshift({
                    createdAt: "2022-04-14T18:27:19.838Z",
                    id: "5",
                    name: "Categories"
                });
                setCategories(response.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <select onChange={handleChange} className="form-select appearance-none
            block
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
            {categories.map((category) => (
            <option key={category.id} value={category.name}>
                {category.name}
            </option>
            ))}
        </select>
    )
}

export default SelectComponent;