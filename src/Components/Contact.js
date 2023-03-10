import React, { useState, useEffect } from 'react'
import './style.css'
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState();
  const [query, setQuery] = useState('');
  const [allData, setAllData] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()
    let data = {
      name, email, mobile, query
    };
    setAllData([...allData, data])
    if (!name && !email && !mobile && !query) {
      alert('please fill all fields correctly...')
    }

    // else{
    //   localStorage.setItem("data", JSON.stringify(allData))
    // }
    setEmail('')
    setMobile('')
    setQuery('')
    setName('')
  }
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(allData))
  }, [allData]);
  return (
    <div >
      <div className='container ' style={{ marginTop: '15px', marginLeft: '390px', height: '500px', width: '800px' }}>
        <h3>Contact-us</h3>
        <div>
        </div>
        <form onSubmit={submitHandler} >
          <div>
            <label htmlFor='name'><b>Enter your Name</b> </label><br />
            <input type='text' className='inputfeild' autoFocus value={name} onChange={(e) => setName(e.target.value)} />
          </div><br />
          <div>
            <label htmlFor='name'><b>Enter your email</b></label><br />
            <input type='email' className='inputfeild' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div><br />
          <div>
            <label htmlFor='name'><b>Enter your mobile </b></label><br />
            <input type='number' className='inputfeild' value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div><br />
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Enter Your Query</b> </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={query} onChange={(e) => setQuery(e.target.value)}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </div>
  )
}
