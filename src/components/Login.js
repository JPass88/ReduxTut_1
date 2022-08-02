import React from 'react';
import { useDispatch} from 'react-redux';
import { login,logout } from '../features/user'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

function Login() {

  //Used to specify which action we want to call
  const dispatch = useDispatch()

  return (
    <div>
        <Button 
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
        </Button>
        <Button 
          onClick={ () => {
            dispatch( logout(
              //This *would* be the payload object!!         
              //Because we're clearing the fields and the logout reducer uses
              //local variables, we don't need to send a payload  
            ));
          }}
        >
          LOGOUT
        </Button>
    </div>
  )
}

export default Login;