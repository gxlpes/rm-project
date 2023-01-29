import { NextPage } from 'next';
import { useRef, useState } from 'react';

const Login: NextPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={() => console.log("a")}>
            <div>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required ref={emailRef} />
            </div>
            <div>
                <label htmlFor="password">Your Password</label>
                <input type="password" id="password" required ref={passwordRef} />
            </div>
            <button type="button" >{isLogin ? "Login" : "Create account"}</button>
            <button type="button" onClick={() => setIsLogin(prev => !prev)}>
                {isLogin ? "Create new account" : "Login with existing account"}
            </button>
        </form >
    )
}

export default Login