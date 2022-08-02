import React from 'react';
import { useDispatch} from 'react-redux';
import { login,logout } from '../features/user'

function Login() {

  //Used to specify which action we want to call
  const dispatch = useDispatch()

  return (
    <div>
        <button 
          onClick={ () => {
            dispatch( login(
              //This is the payload object!!
              {
                name: "Jimithy",     //internal object/braces we set the object's state properties' values 
                age: 30,
                email: "jj@jetplane.ca"
              }
            ));
          }}
        >
          Login
        </button>
        <button 
          onClick={ () => {
            dispatch( logout(
              //This *would* be the payload object!!         
              //Because we're clearing the fields and the logout reducer uses
              //local variables, we don't need to send a payload  
            ));
          }}
        >
          LOGOUT
        </button>
    </div>
  )
}

export default Login;