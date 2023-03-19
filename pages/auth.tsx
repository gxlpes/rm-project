import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { authUser } from '../src/app/features/authSlice';
import { addCharactersFromUser } from '../src/app/features/charactersSlice';
import { showNotification } from '../src/app/features/notificationSlice';
import { useGetCharactersQuery, useLoginMutation, useSignupMutation } from '../src/app/services/extendedApi';
import AuthForm from '../src/components/ui/AuthForm';
import { getCharactersFromUser } from '../src/lib/characters';
import { UserCredentials } from '../src/types/api/backend/User';

const AuthPage: NextPage = () => {
    const dispatch = useDispatch();
    const [signUser] = useSignupMutation()
    const [loginUser] = useLoginMutation();

    async function submitHandler(event: React.FormEvent, userCredentials: UserCredentials, isLogin: boolean) {
        dispatch(showNotification({ title: "Verifying...", message: "Checking your account", status: "pending" }))
        event.preventDefault();

        try {
            const user = isLogin ? await loginUser(userCredentials).unwrap() : await signUser(userCredentials).unwrap()
            dispatch(showNotification({ title: "Success!", message: "You are logged!", status: "success" }))
            dispatch(authUser(user))
            const test = getCharactersFromUser(user.user.email);
            console.log(test)
        } catch (error) {
            console.error(error)
            dispatch(showNotification({ title: "Error!", message: "Something went wrong!", status: "error" }))
        }
    }

    return (
        <>
            <AuthForm submitHandler={submitHandler} />
        </>
    )
}

export default AuthPage;