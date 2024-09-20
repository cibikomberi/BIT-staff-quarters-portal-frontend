import axios from "axios";
import { useState } from "react";

const VerifyCheckout = () => {

    const [PIN, setPin] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState([]);

    const handlePIN = (pin) => {
        setPin(pin)
        if (pin.length >= 6) {
            axios.get(`/checkouts/pin/${pin}`)
                .then((res) => {
                    console.log(res.data);
                    setData(res.data)
                })
        }
    }

    const handleCheckout = (id) => {
        console.log(id);
        axios.post(`checkouts/checkout/${id}`, {
            "PIN": PIN
        }).then(() => {
            handlePIN(PIN);
        }).catch((err) => {
            setErrorMessage(err.response.data)
        })
    }
    
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            <md-filled-text-field
                class="checkout"
                value={PIN}
                onInput={(e) => handlePIN(e.target.value)}
                label="PIN"
            >
            </md-filled-text-field>
            <p style={{ color: "red", fontSize: "16px", margin: "5px", paddingLeft: "20px" }}>{errorMessage}</p>

            {data.map((e, i) => {
                return (
                    <div className='summary' style={{ width: "85%", display: "flex", }} key={e.id}>
                        <div style={{ width: "22%" }}>
                            <p className="key-text">Name</p>
                            <p className="value-text">{e.name}</p>
                        </div>
                        <div style={{ width: "22%" }}>
                            <p className="key-text">Type</p>
                            <p className="value-text">{e.type}</p>
                        </div>
                        <div style={{ width: "22%" }}>
                            <p className="key-text">Faculty</p>
                            <p className="value-text">{e.faculty.name}</p>
                        </div>
                        <div style={{ width: "22%" }}>
                            <p className="key-text">Faculty</p>
                            <p className="value-text">{e.faculty.quartersNo}</p>
                        </div>
                        <md-filled-button class="button-primary" style={{ margin: "5px", height: "fit-content" }} onClick={() => handleCheckout(e.id)}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <svg style={{ paddingRight: "10px" }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" /></svg>
                                Checkout
                            </div>
                        </md-filled-button>
                    </div>
                )
            })}
        </div>
    );
}

export default VerifyCheckout;