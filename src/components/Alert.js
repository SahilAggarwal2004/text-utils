export default function Alert(props) {
    return (
        <div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade text-center ${props.alert.type ? "show" : "hide"}`} role="alert">
            <strong>{props.alert.type ? props.alert.type + " : " : <>&#8203;</>}</strong>{props.alert.msg}
        </div>
    )
}