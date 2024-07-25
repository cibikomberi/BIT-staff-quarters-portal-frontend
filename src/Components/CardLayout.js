import './style/card.css'


const CardLayout = (props) => {
    return ( 
        <div>
            <div className = "card">
            <img src={props.img} alt="given"></img>
            <h1>{props.head}</h1>
            <p>{props.content}</p>
            </div>

        </div>
     );
}
 
export default CardLayout;