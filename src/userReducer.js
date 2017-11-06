const NAME_CHANGED = 'NAME_CHANGED'
const EMAIL_CHANGED = 'EMAIL_CHANGED'

export const onNameChanged = name => ({ type: NAME_CHANGED, payload: name })
export const onEmailChanged = email => ({ type: EMAIL_CHANGED, payload: email })

const reducer = (state = {
  name: 'Example User',
  email: 'example@example.com',
}, { type, payload }) => {
  switch (type) {
    case NAME_CHANGED:
      return {
        ...state,
        name: payload
      }
    case EMAIL_CHANGED:
      return {
        ...state,
        email: payload
      }
    default:
      return state
  }
}

export const getName = state => state.user.name
export const getEmail = state => state.user.email

export default reducer
