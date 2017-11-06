import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import MyComponent from './MyComponent'
import { getName, getEmail, onEmailChanged, onNameChanged } from './userReducer'

export default connect(
  createStructuredSelector({
    name: getName,
    email: getEmail,
  }),
  {
    onEmailChanged,
    onNameChanged,
  })(MyComponent)