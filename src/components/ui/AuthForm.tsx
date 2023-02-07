import React, { useRef, useState } from 'react'

const AuthForm = ({ submitHandler }: any) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [isLogin, setIsLogin] = useState(true);

    const userCredentials = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value
    }

    return (
        <form onSubmit={(event: React.FormEvent) => submitHandler(event, userCredentials, isLogin)}>
            <div>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required ref={emailRef} />
            </div>
            <div>
                <label htmlFor="password">Your Password</label>
                <input type="password" id="password" required ref={passwordRef} />
            </div>
            <button type="button" >{isLogin ? "Login" : "Create account"}</button>
            <button type="button" onClick={() => setIsLogin((prev: boolean) => !prev)}>
                {isLogin ? "Create new account" : "Login with existing account"}
            </button>
            <button type="submit">Submit</button>
        </form >
    )
}

export default AuthForm