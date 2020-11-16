import React, { useRef } from 'react'

export default function Signin() {
    const email = useRef()
    const password = useRef()

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <form className = "field" >
            <div>

              <label className="label">Email</label>
              <div className="control">
                <input className="input" ref = { email } type="email" placeholder="Enter Email" name="email" id="email" required />
              </div>

              <label className="label">Password</label>
              <div className="control">
                <input className="input" ref = { password } type="password" placeholder="Enter Password" name="psw" id="psw" required />
              </div>

              <p>By creating an account you agree to our <a href="#">Terms and Privacy</a>.</p>
              <button type="submit" className="button">Sign-in</button>
            </div>

            <div className="container signin">
              <p>Do not have an account? <a href="/register">Sign-up</a>.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
    // return (
    //     <div>
    //         <form >
    //             <div class="container">
    //                 <h1>Sign-in</h1>

    //                 <label for="email"><b>Email</b></label>
    //                 <input type="text" placeholder="Enter Email" name="email" id="email" required />

    //                 <label for="psw"><b>Password</b></label>
    //                 <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

    //                 <p>By creating an account you agree to our <a href="#">Terms and Privacy</a>.</p>
    //                 <button type="submit" class="registerbtn">Sign-in</button>
    //             </div>

    //             <div class="container signin">
    //                 <p>Do not have an account? <a href="/register">Sign-up</a>.</p>
    //             </div>
    //         </form>
    //     </div>
    // )

    async function login() {
        try {
            const response = await fetch('/signin', {
                method: 'POST', 
                body: JSON.stringify({}),
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await response.json()
        } catch (err) {
            alert(err)
            return null
        }
    }
}
