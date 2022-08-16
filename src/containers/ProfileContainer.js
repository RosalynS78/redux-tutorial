// store (container to wrap dumb component)
import { connect } from 'react-redux'
import ProfileComponent from '../components/ProfileComponent'

const mapStateToProps = (state) => {
    return {
        hello: state.hello
    }
}


// react - redux creates context where ProfileComponent is executed(invoked)
// now access
export default connect(mapStateToProps)(ProfileComponent)