import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Cart() {
   

    const data = useSelector((state) => state.cartData);
    const  [list,setList]=useState(data);
    localStorage.setItem('list',JSON.stringify(list))
   
    let amount = list.length && list.map((item) => item.price).reduce((prev, next) => prev + next)
    const deleteItemHandler = (id) => {
     const updatedData = list.filter((element) => {      
            return element.id !== id
        });
        setList(updatedData);
    }



    return (
        <>
            <div className='container main_div' >
                <div className='card'>
                    <div className='cart-container'>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">category</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((item,index) =>
                                        <tr key={item.id}>
                                            <th scope="row">{index+1}</th>
                                            <td>{item.title}</td>
                                            <td>{item.category}</td>
                                            <td>{item.price} $</td>
                                            <td><button onClick={() => deleteItemHandler(item.id)} className='btn btn-danger'>Remove</button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div><br />
                    <div className='bill'>
                        <div><span>Amount :{amount} $</span></div>
                        <div><span>Discount(10%) :{amount / 10} $</span></div>
                        <div><span>Taxes(5%) :${amount / 5} </span></div>
                        <div><span><u style={{ color: 'green' }}>Total-Amount :</u>{amount - (amount / 10)} $</span></div>
                    </div>
                </div>

            </div >
            <Link to="/" className="button-63 mx-2 my-2" > Continue Shoping</Link>
        </>
    )
}
