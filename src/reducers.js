import { combineReducers } from 'redux'


// (state) - parameters - localized variable in this function
// if state is undefined make it defined and = to whatever want
// give it default parameter


const hello = (state = null) => state
const cars = (state = []) => state
const user = (state = null) => state

export default combineReducers({ hello, cars, user })


