import React from 'react'
import img2 from './deliverImg.jpg'
export default function Carrier() {
  return (
    <div>
    <div className='container ' style={{ marginTop: '5px', marginLeft: '390px', height: '500px', width: '800px' }}>
        <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-8">
                    <img src={img2} className="img-fluid rounded-start" alt="..." style={{height:'250px',width:'700px'}}/>
                </div>
                <div className="col-md-12">
                    <div className="card-body">
                        <h5 className="card-title">carrier-Shipment</h5>
                        <p className="card-text">.
                        <li>Breaking bulk (law)</li>
                        <li>Conversion van</li>
                        <li>Cutaway van chassis,Online food ordering</li>
                        <li>Mail order</li>
                        <li>Multi-stop truck,Category:Shopping delivery services</li>
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}
