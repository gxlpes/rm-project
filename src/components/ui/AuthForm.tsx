import React, { useState } from 'react';

const AuthForm = ({ submitHandler }: (any)) => {
    const [isLogin, setIsLogin] = useState(true);
    const [credentialsField, setCredentialsField] = useState({ email: "", password: "" })

    return (
        <form onSubmit={(event: React.FormEvent) => submitHandler(event, credentialsField, isLogin)}>
            <div>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCredentialsField({ ...credentialsField, email: e.target.value })} />
            </div>
            <div>
                <label htmlFor="password">Your Password</label>
                <input type="password" id="password" required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCredentialsField({ ...credentialsField, password: e.target.value })} />
            </div>
            <button type="button" >{isLogin ? "Login" : "Create account"}</button>
            <button type="button" onClick={() => setIsLogin((prevState: boolean) => !prevState)}>
                {isLogin ? "Create new account" : "Login with existing account"}
            </button>
            <button type="submit">Submit</button>
        </form >
    )
}

export default AuthForm