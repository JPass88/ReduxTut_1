import { createSlice} from "@reduxjs/toolkit";

const initialStateValue = {
    name:  "",
    age:   0,
    email: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: initialStateValue
    //     {  **Changed to a reusable variable**, but below is example of defining initial values
    //         name: "", //internal object/braces we set the object's initial-state properties 
    //         age: 0,
    //         email: ""
    // }
    },
    reducers: {
        //login: () is a reducer function
        //state tracks the state of the object; initially the "",0,"" values, then whatever it changes to
        //action has a payload (object) that can contain values to be used in modifying the state 
        //  type can be used to conditionally trigger different actions (?)
        login: (state, action) => {          //Reducer function
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = initialStateValue; //set the object's initial-state properties to default                                    
        }  
    }  
})

//This will allow us to access the reducer functions in 
//different components at any level in the application
export const {login, logout} = userSlice.actions; 


export default userSlice.reducer; //To be accessed in index.js
//Note: default says export as is and not as an object (?)