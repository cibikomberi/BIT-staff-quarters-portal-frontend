import { useLoaderData } from "react-router-dom";

const InnmatesCheckout = () => {
    let innmatesList = useLoaderData();
    return ( 
        <div className='main-area'>
            <h2>Select Innmates to Checkout</h2>
            <div>
            {innmatesList.map((innmate,index) =>(
                <div key={index} style={{display:"flex",alignItems:"center"}}>
                    <md-checkbox  name={index} id={`check-${index}`} touch-target="wrapper"></md-checkbox>
                    <label  htmlFor={`check-${index}`}>{innmate.name}</label>
                </div>
            ) )}
            </div>

            <md-filled-button class="button-primary" style={{alignSelf: "flex-end"}} >Submit</md-filled-button>
        </div>
     );
}
 
export default InnmatesCheckout;