import React, { useRef } from 'react'

export default function Register() {
  const email = useRef()
  const password = useRef()

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <form className = "field" onSubmit={register}>
            <div>
              <p>Please fill in this form to create an account.</p>

              <label className="label">Email</label>
              <div className="control">
                <input className="input" ref = { email } type="email" placeholder="Enter Email" name="email" id="email" required />
              </div>

              <label className="label">Password</label>
              <div className="control">
                <input className="input" ref = { password } type="password" placeholder="Enter Password" name="psw" id="psw" required />
              </div>

              <p>By creating an account you agree to our <a href="#">Terms and Privacy</a>.</p>
              <button type="submit" className="button">Register</button>
            </div>

            <div className="container signin">
              <p>Already have an account? <a href="/signin">Sign in</a>.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )


  async function register(e) {
    try {
      e.preventDefault();
      let formData =  {
        email: email.current.value,
        password: password.current.value
      }
      formData = JSON.stringify(formData)
      const response = await fetch('/register', {
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'application/json' }
      })
      const result = await response.json()
      console.log(result)
    } catch (err) {
      alert(err)
      return null
    }
  }

}
