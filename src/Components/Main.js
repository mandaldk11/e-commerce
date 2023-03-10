import React, { useEffect } from 'react'
import './style.css'
import { addToCart, removeToCart, } from '../Redux/Actions';
import { productList } from '../Redux/productAction';
import { useDispatch } from 'react-redux';
import { BsPlusLg } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Main() {
    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData)
    console.log('final data... ', data)

    useEffect(() => {
        dispatch(productList())
    }, [dispatch])

    return (
        <div className='container '>
            
            <div className=' row row-cols-1 row-cols-md-4 g-3 my-4 '>
                {
                    data.map((items) => {
                        return (
                            <div key={items.id} >
                                <div className="card my-4 justify-content-center mx-2" style={{ width: '18rem' }}>
                                    <img src={items.images[0]} className=" images card-img-top" alt="..." style={{ height: '19rem', width: '17rem' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{items.title}</h5>
                                        <p className="card-text">Price: ${items.price}</p>
                                        <p className="  card-text">category: {items.category}</p>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Link to="#" className="button-63 mx-2 my-2" onClick={() => dispatch(addToCart(items))}> <BsPlusLg /></Link>
                                            <Link to="#" className="button-75  mx-2 my-2" onClick={() => dispatch(removeToCart(items))}><FiMinusCircle /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
           
        </div>
    )
}
