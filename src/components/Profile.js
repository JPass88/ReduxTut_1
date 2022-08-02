import React from 'react';
/* 
    useSelector (hook): accesses Redux store's state & grabs values of states

*/
import { useSelector} from "react-redux";


function Profile() {

    //Create an object comprised of the state values (uses the initial values first!)
    //..(name="", age=0, email="")
    //Here, we specify which state we want to manipulate
    //                       (state) will contain all states
    const user = useSelector((state) => state.user.value);

    // {user.name} is accessing the store's state for user
    return (
    <div>
        <h1>Profile Page</h1>
        <p>Name: {user.name} </p> 
        <p>Age: {user.age}</p>
        <p>Email: {user.email} </p>
    </div>
  )
}

export default Profile   