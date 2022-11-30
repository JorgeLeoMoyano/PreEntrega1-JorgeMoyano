//rafce
const Saludo = (props) => {

    const title = {
        border : 'solid blue 2px',
        margin : '20px',
        padding : '20px'
    };


  return (
    <div style = {title}>
    <div>Saludo {props.name}</div>
    <div>Tienes {props.age} años</div>
    <button onClick={props.action}>Click</button>
    </div>
  )
}
export default Saludo

