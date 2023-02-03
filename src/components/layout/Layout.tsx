import React from 'react'
import { useSelector } from 'react-redux'
import NotificationToast from '../ui/NotificationToast'
import Footer from './ui/Footer'
import Header from './ui/Header'

const Layout = ({ children }: any) => {
    const notificationToastData = useSelector((state: any) => state.notification.activeNotification)
    return (
        <>
            <Header />
            <div>{children}</div>
            <NotificationToast title={notificationToastData.title} message={notificationToastData.message} status={notificationToastData.status} />
            <Footer /></>
    )
}

export default Layout