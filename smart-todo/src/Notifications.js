import HistItems from "./HistItems";

const Notifications = ({notifications, handleCheckboxChange}) => {

return(
<div className = "notifsAndSlider">

<span className = "notifs">
You are {!notifications && <span>not</span>} signed up for email notifications.
</span> 

<label onClick = {(e) => handleCheckboxChange(e)} className="switch">
        <input checked = {notifications} type="checkbox"/>
        <span className="slider round"></span>
</label>

</div>
)
}

export default Notifications;