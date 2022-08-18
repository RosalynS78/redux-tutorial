// store (container to wrap dumb component)
import { connect } from 'react-redux'
import ProfileComponent from '../components/ProfileComponent'
import { removeCar, addCar } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        hello : state.hello,
        example : state.example,
        user : state.user,
        cars : state.cars
    }
}
// use specific parameter dispatch because connect is looking for memory allotment called dispatch(function)
const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car)),
        removeCar: (index) => dispatch(removeCar(index)),
        
    }
}

// react - redux creates context where ProfileComponent is executed(invoked)
// now access
export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)