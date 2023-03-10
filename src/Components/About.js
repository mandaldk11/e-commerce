import React from 'react'
import img1 from './productImg.jpg'
export default function About() {
    return (
        <div>
            <div className='container ' style={{ marginTop: '15px', marginLeft: '250px', height: '600px', width: '900px' }}>
                <div className="card mb-3" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-8">
                            <img src={img1} className="img-fluid rounded-start" alt="..." style={{height:'250px',width:'700px', marginTop: '15px'}}/>
                        </div>
                        <div className="col-md-12">
                            <div className="card-body">
                                <h5 className="card-title">About StackHolicMart</h5>
                                <p className="card-text">This is a global E-commerce and consultancy provider company estb. in 2022 by<b>Mr.Ridham savaliya</b>in Gujrat india.E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet.E-commerce draws on technologies such as mobile commerce,electronic funds transfer,supply chain management, Internet marketing,online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems. E-commerce is in turn driven by the technological advances of the semiconductor industry.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
