import React from 'react'
import {connect} from 'react-redux'
import { login } from './store';

const Login = (props) => {
  const {handleSubmit} = props

  return (
    <div className='center'>
      <h1>Unlock your secrets, creativity and imagination...</h1>
      <div className=''>
        <form className='' onSubmit={handleSubmit}>
          <div className=''>
            <div className=''>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' className='' />
            </div>
            <div className=''>
              <label htmlFor='email'>Password</label>
              <input type='password' name='password' className='' />
            </div>
            <div className=''>
              <button type='submit' className=''>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // Hey, check it out! Because we pass the connected Login to a Route
  // (we do this in client/index.js), it receives the "route props"
  // (match, location, and history) as its "own props".
  const history = ownProps.history

  return {
    handleSubmit: async (evt) => {
      evt.preventDefault()
      await dispatch(login({
        email: evt.target.email.value,
        password: evt.target.password.value
      }));
      history.push('/entries');
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)