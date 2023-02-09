import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { hideNotification } from '../../app/features/notificationSlice'
import NotificationToast from '../ui/NotificationToast'
import Footer from './ui/Footer'
import Header from './ui/Header'

const Layout = ({ children }: any) => {
    const notificationToastData = useSelector((state: any) => state.notification.activeNotification)
    const isRendered = useSelector((state: any) => state.notification.isRendered)
    const dispatch = useDispatch()

    if (isRendered) setTimeout(() => {
        dispatch(hideNotification())
    }, 3000)

    return (
        <>
            <Header />
            <div>{children}</div>
            {isRendered ? <NotificationToast title={notificationToastData.title} message={notificationToastData.message} status={notificationToastData.status} /> : null}
            <Footer />
        </>
    )
}

export default Layout