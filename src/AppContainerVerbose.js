import { connect } from 'react-redux'
import MyComponent from './MyComponent'

function mapStateToProps(state) {
  return {
    name: state.user.name,
    email: state.user.email,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChanged: (name) => dispatch({ type: 'NAME_CHANGED', payload: name }),
    onEmailChanged: (email) => dispatch({ type: 'EMAIL_CHANGED', payload: email }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
