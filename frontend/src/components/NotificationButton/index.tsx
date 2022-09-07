import icon from '../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
    return( 
        <div className="dstmeta-red-btn">
            <img src={icon} alt="Notificar"></img>
        </div>
    )
}

export default NotificationButton;
