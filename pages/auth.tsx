import { NextPage } from 'next';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../src/app/features/authSlice';
import { showNotification } from '../src/app/features/notificationSlice';
import { useLoginMutation, useSignupMutation } from '../src/app/services/auth';

const Auth: NextPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [addNewUser, response1] = useSignupMutation()
    const [loginUser, loginUserStatus] = useLoginMutation();

    const dispatch = useDispatch();

    async function submitHandler(event: any) {
        event.preventDefault();
        const enteredEmail = emailRef.current!.value;
        const enteredPassword = passwordRef.current!.value;



        if (isLogin) {
            dispatch(showNotification({ title: "Verifying...", message: "Checking your account", status: "pending" }))

            try {
                const user = await loginUser({ email: enteredEmail, password: enteredPassword }).unwrap()
                console.log(user)

                dispatch(setCredentials(user))
                dispatch(showNotification({ title: "Success!", message: "You are logged!", status: "success" }))
            } catch (error) {
                dispatch(showNotification({ title: "Error!", message: "Something went wrong!", status: "error" }))
                console.error(error)
            }




        } else {
            try {
                const user = await addNewUser({ email: enteredEmail, password: enteredPassword }).unwrap()
                dispatch(setCredentials(user))
            } catch (error) {
                console.log(error);
            }
        }
    }



    return (
        <form onSubmit={submitHandler}>
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
            <button type="submit">Submit</button>
        </form >
    )
}

export default Auth;