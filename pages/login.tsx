import { NextPage } from 'next'
import React from 'react'

const Login: NextPage = () => {
    return (
        <form>
            <div>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="password">Your Password</label>
                <input type="password" id="password" required />
            </div>
            <button type="button" >Login</button>
        </form>
    )
}

export default Login