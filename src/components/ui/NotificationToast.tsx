import { useDispatch } from "react-redux";
import styles from "../../../styles/components/ui/Notification.module.css";
import { hideNotification } from "../../app/features/notificationSlice";
import { Notification } from "../../types/api/ui/Notification";

const NotificationToast = ({ title, message, status }: Notification) => {
    const dispatch = useDispatch();
    let statusClasses = "";

    switch (status) {
        case "success":
            statusClasses = styles.success;
            break;
        case "error":
            statusClasses = styles.error;
            break;
        case "pending":
            statusClasses = styles.pending;
            break;
        default: statusClasses = ""
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