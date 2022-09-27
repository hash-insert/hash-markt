export default function Button(props){
    return (
        <div>
            <button  onClick={props.handleBtn}>{props.name}</button>
        </div>
    )
}