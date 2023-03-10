import React  from 'react'
import { FcApproval } from "react-icons/fc";
import { BsCart } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { productSearch } from '../Redux/productAction';
import './style.css'

import { Link } from 'react-router-dom';
export default function Navbar() {
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar button-63 fixed-top ">
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="navbar-brand" to="/">E-StackholicMart.com <FcApproval /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" >
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/carrier">Carrier</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link`} to="/contact" 
                               
                                >Contact US</Link>
                            </li>


                        </ul>
                        <form className="d-flex" role="search">
                            <input style={{width:'500px',marginRight:'30px'}} className="form-control me-2" type="search" placeholder="Search your products..." aria-label="Search" onChange={(e) => dispatch(productSearch(e.target.value))} />
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            {/* <BsCart/> */}
                        </form>
                        <div>
                            <Link to='/cart'>

                                <BsCart style={{ color: 'white', marginTop: '10px', marginLeft: '3px' }}>
                                </BsCart> <span className='cartCounter'>{result.length ? result.length:''}</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>
        </div>


        // <div>
        //     <nav className=" navbar-expand-lg  navbar button-63 fixed-top">
        //         <div className="container-fluid">

        //             <Link className="navbar-brand" to="/">StackholicMart.com  <FcApproval /></Link>

        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>

        //             {/* all menu */}

        //             {/* <Link to='/'> <li style={{ color: 'white' }}><i className="fa-duotone fa-house"></i> Home</li></Link>

        //             <Link to='/carrier'>  <li style={{ color: 'white' }}><i className="fa-light fa-truck-fast"></i>Carrier</li> </Link>
        //             <Link to='/contact'>  <li style={{ color: 'white', textDecoration: 'none' }}><i className="fa-solid fa-phone"></i>Contact Us</li> </Link>

        //             <Link to='/cart'><li style={{ color: 'white' }}><BsCart />cart</li></Link>

        //             <Link to='/about' style={{ color: 'white' }} ><li><i className="fa-solid fa-earth-americas"></i>About</li></Link> */}

        //             {/* end */}

        //             {/* search div */}
        //             <div className="collapse navbar-collapse" style={{ marginLeft: '200px' }} id="navbarSupportedContent">
        //                 <form className="d-flex " role="search">
        //                     <input className="form-control me-4 " style={{ width: '600px', marginLeft: '500px' }} type="text" placeholder="Search products..." aria-label="Search"
        //                         onChange={(e) => dispatch(productSearch(e.target.value))}
        //                     />
        //                 </form>
        //             </div>
        //             <Link to='/cart'>

        //                 <BsCart style={{ color: 'white', marginTop: '10px', marginLeft: '3px' }}>
        //                 </BsCart> <span className='cartCounter'>{result.length ? result.length : ''}</span>
        //             </Link>

        //         </div>

        //     </nav>
        // </div>
    )
}



// <!-- HTML !-->
// <button className="button-63" role="button">Button 63</button>

