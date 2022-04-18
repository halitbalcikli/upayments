import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {
    return (
       <div className='flex justify-between p-6 header rounded-md border-gray-300 shadow-sm'>
           <Link to={`/`}><h2 className='italic font-semibold'>UPayments Store</h2></Link>
           <h2 className='italic font-semibold'>Register</h2>
       </div> 
    )
}

