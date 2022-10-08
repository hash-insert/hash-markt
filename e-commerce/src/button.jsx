export default function Button (props) {
   return (
    <div>
            <button className = {props.className} onClick = {props.handlebtn}>{props.name}</button>
    </div>
   )
}