// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  //   const handleSubmit = event => {
  //     event.preventDefault() // prevents the refresh of the whole page (not a POST call)
  //     // const value = event.target.elements[0].value
  //     const value = event.target.elements.userNameInput.value
  //     onSubmitUsername(value)
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         {/* hmtlFor is identical to html "for" property. When you click on the text, it focuses the input for you automatically. */}
  //         <label htmlFor="userNameInput">Username:</label>
  //         <input id="userNameInput" type="text" />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   )

  // Extra credit 1:

  // const usernameRef = React.useRef(null)

  // const handleSubmit = event => {
  //   event.preventDefault()

  //   onSubmitUsername(usernameRef.current.value)
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="userNameInput">Username:</label>
  //       <input ref={usernameRef} id="userNameInput" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  //Extra credit 2:

  // const [userName, setUserName] = React.useState(null)
  // const [error, setError] = React.useState(null)

  // const handleChange = event => {
  //   const newValue = event.target.value
  //   setUserName(newValue)
  //   const isValid = newValue === newValue.toLowerCase()
  //   setError(isValid ? null : 'Username must be all in lowercase')
  // }

  // const handleSubmit = event => {
  //   event.preventDefault()

  //   onSubmitUsername(userName)
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <div role="alert">{error}</div>
  //       <label htmlFor="userNameInput">Username:</label>
  //       <input id="userNameInput" type="text" onChange={handleChange} />
  //     </div>
  //     <button type="submit" disabled={Boolean(error)}>
  //       Submit
  //     </button>
  //   </form>
  // )

  // Extra credit 3:

  const [userName, setUserName] = React.useState(null)

  const handleChange = event => {
    const newValue = event.target.value
    setUserName(newValue.toLowerCase())
  }

  const handleSubmit = event => {
    event.preventDefault()

    onSubmitUsername(userName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          id="userNameInput"
          type="text"
          onChange={handleChange}
          value={userName}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
