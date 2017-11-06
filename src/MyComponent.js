import React from 'react'

const App = ({ name, email, onNameChanged, onEmailChanged }) => (
  <div>
    <p>
      Name
      <br />
      <input
        name="name"
        value={name}
        onChange={({ target: { value } }) => onNameChanged(value)}
      />
    </p>
    <p>
      Email
      <br />
      <input
        name="email"
        value={email}
        onChange={({ target: { value } }) => onEmailChanged(value)}
      />
    </p>
  </div>
)

export default App
