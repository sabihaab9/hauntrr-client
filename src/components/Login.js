import {React, useState} from 'react'

function Login({ handleLogin, error, onSignup}) {
    const [details, setDetails] = useState({name: "", password: ""})
    const submitHandler = e => {
      e.preventDefault();
      handleLogin(details)
    }
  return (
    <div className='all-forms-div'>
        <form className='info' onSubmit={submitHandler}>
          <div className='form-inner'>
            <h2>Login</h2>
            {(error !== "") ? (<div className='error'>{error}</div>) : ""}
            <div className='form-group'>
              <label htmlFor="name">Username:</label>
              <input type="text" name="name" id='name' placeholder='Username' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className='form-group'>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id='password' placeholder='Password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="LOG IN" />
            <br></br>
            <button className='button' onClick={onSignup}>No account? No Problem, Register here!</button>
          </div>
        </form>
    </div>
  )
}
export default Login