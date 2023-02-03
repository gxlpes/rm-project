import { useDispatch } from "react-redux";
import { hideNotification } from "../../app/features/notificationSlice";
import styles from "../../../styles/components/ui/Notification.module.css"
import { useSelector } from "react-redux";

interface Notification {
    title: string
    message: string
    status: string
}

const NotificationToast = ({ title, message, status }: Notification) => {
    const dispatch = useDispatch();
    const isRendered = useSelector((state: any) => state.notification.isRendered)
    console.log(isRendered, "render");

    let statusClasses = "";

    if (status === "success") {
        statusClasses = styles.success;
    }

    if (status === "error") {
        statusClasses = styles.error;
    }

    if (status === "pending") {
        statusClasses = styles.pending;
    }

    const activeClasses = `${styles.notification} ${statusClasses}`;

    return (
        <div className={activeClasses} onClick={() => dispatch(hideNotification())}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
}

export default NotificationToast;