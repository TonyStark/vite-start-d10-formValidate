import { useState } from 'react'

function App() {
  const [data,setData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
  })
  const [arr,setarr] = useState([])
  const [isValid,setIsValid] = useState(true)
  const [dbutton,setDbutton] = useState(false)
  const handleChange = (e)=>{
    let {name, value} = e.target
    setData({...data,[name] : value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setarr([...arr,data])
    setData({ firstName: '', 
    lastName: '', 
    email: '', 
    password: '' });
  }
  const handleBlur = () => {
    if (data.password.length > 8) {
      setIsValid(true);
      setDbutton(true);
    } else {
      setIsValid(false);
    }
  };
  const handleFocus = () => {
    if (data.password.length > 8) {
      setIsValid(true);
    }
  };
  return (
    <main>
      <div className="container">
        <div className="row justify-content-center">
          <h3 className='text-center'>Register</h3>
          <div className="col-5">
            <form action="" onSubmit={handleSubmit}>
              <input  type="text" value={data.firstName} name='firstName' onChange={handleChange} required placeholder='Enter First Name' className='form-control' /><br />
              <input type="text" value={data.lastName} name='lastName' onChange={handleChange} required placeholder='Enter Last Name Name' className='form-control' /><br />
              <input type="email" value={data.email} name='email' required placeholder='Enter Email Address' onChange={handleChange} className='form-control' /><br />
              <input type="password" style={{ borderColor: isValid ? 'none' : 'red' }} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} value={data.password} required name='password' placeholder='Enter Password' className='form-control' /><br />
              {!isValid && <p>Password must be at least 8 characters long.</p>}
              <button disabled={!dbutton} className='btn btn-primary'>Register</button>
            </form>
          </div>

        </div>
      </div>
    </main>
  )
}

export default App
