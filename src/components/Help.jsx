import { useState } from "react"

export default function Help() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [response, setResponse] = useState('')

  const submit = () => {
    alert(`Thank you ${firstName} ${lastName}! Your response has been recorded`)
    setFirstName('')
    setLastName('')
    setEmail('')
    setResponse('')
  }

  const firstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const lastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const emailChange = (e) => {
    setEmail(e.target.value)
  }

  const responseChange = (e) => {
    setResponse(e.target.value)
  }

  return (
    <div className="Help">
      <h3>
        Have any questions or want to share feedback?
      </h3>
      <p>
        We will get back to you in 3-5 business days
      </p>
      <div>
        Email Address <br/>
        <input id = 'email' type="text" value={email} onChange={emailChange}></input>
      </div>
      <div>
        First Name <br />
        <input id="first-name" type="text" value={firstName} onChange={firstNameChange}></input>
      </div>
       <div>
        Last Name <br />
        <input id='last-name' type="text" value={lastName} onChange={lastNameChange}></input>
      </div>
      <textarea id = 'user-input' type="text" value={response} onChange={responseChange}></textarea>
      <button onClick={submit}>Submit</button>
    </div>
  )
}
