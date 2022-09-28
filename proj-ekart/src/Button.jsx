export default function Button(props){
    return (
        <div>
            <button className={props.className} onClick={props.handleBtn}>{props.name}</button>
        </div>
    )
}