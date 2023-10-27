import './iconSwitch.css'

export default function IconSwitch(props) {
    const { icon, onSwitch } = props
    return (
        <span className="material-icons icon" onClick={()=>{onSwitch()}}>{icon}</span>
    );
}