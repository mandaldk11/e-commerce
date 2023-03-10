import React from 'react'
import { Link } from 'react-router-dom'
// import '../Style.css'
export default function Footer() {
    return (
        <div>
            {/* <!-- footer component start --> */}
            <footer className=" py-5 my-2 " style={{ backgroundImage: 'linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb' }}>
                <div className="row">
                    <div className="col-12 col-md">

                        <small className="d-block mb-3 " style={{ color: 'white', marginLeft: '15px' }}>www.E-StackHolicMart.com &copy; 2022-2023</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5><Link to="/" style={{ color: 'white' }}>Home</Link></h5>
                        <ul className="list-unstyled text-small" style={{ color: 'white' }}>
                            <li>Trending Fashion</li>
                            <li>Multiple feature</li>
                            <li>Accurate Product</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5><Link to="/about" style={{ color: 'white' }}>About</Link></h5>
                        <ul className="list-unstyled text-small" style={{ color: 'white' }}>
                            <li>Cricket</li>
                            <li>Football</li>
                            <li>Badminton</li>
                            <li>etc</li>

                        </ul>
                    </div>


                    <div className="col-6 col-md">
                        <h5><Link to="/cart" style={{ color: 'white' }}>cart</Link></h5>
                        <ul className="list-unstyled text-small" style={{ color: 'white' }}>
                            <li>items</li>
                            <li>amount</li>
                            <li>taxes</li>
                            <li>Discount</li>

                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5><Link to="/contact" style={{ color: 'white' }}>Contact-Us</Link></h5>
                        <ul className="list-unstyled text-small" style={{ color: 'white' }}>
                            <li>Name</li>
                            <li>email</li>
                            <li>query</li>
                            <li>post it</li>

                        </ul>
                    </div>




                </div>
            </footer>
        </div>)


}