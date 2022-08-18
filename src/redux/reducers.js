import { combineReducers } from 'redux'


// (state) - parameters - localized variable in this function
// if state is undefined make it defined and = to whatever want
// give it default parameter


// switch statements take in conditions (global method)

// reducer function will return action one of the objects reducer


const cars = (state = [], action) => {
    switch(action.type) {
        case "ADD_CAR" :
            return [action.value, ...state]
            // returns at the bottom
            // return [...state, action.value]
        case "REMOVE_CAR" :

        // reason for spread operator ...state we need to create a copy of state cannot manipulate original violates rule of mutability
        // to mutate must to it indirectly rather than directly
            let newState = [...state]
            newState.splice(action.value, 1)
            return newState


        default:
            return state
    }
}










const hello = (state = null) => state
const example = (state = null) => state
const user = (state = null) => state

export default combineReducers({ hello, cars, user, example })


// rules to follow
//  all properties on state have reducers defined
//  all reducers get exported in the combineReducers object
//  all reducers must return state cannot return undefined

