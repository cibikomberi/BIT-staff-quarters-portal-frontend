import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const InnmatesCheckout = () => {
	let innmatesList = useLoaderData();

	const navigate = useNavigate()
	const id = localStorage.getItem('id');
	const [errorMessage, setErrorMessage] = useState('');
	const [selectedValues, setSelectedValues] = useState([]);


	const handleCheckboxChange = (event, id) => {
		if (event.target.checked) {
			setSelectedValues([...selectedValues, id]);
		} else {
			setSelectedValues(selectedValues.filter((val) => val !== id));
		}
	}
	const handleSubmit = () => {
		axios.post(`innmates/checkout/${id}`, selectedValues)
			.then((res) => {
				if (res.status === 200) {
					navigate(-1);
				}
			}).catch((err) => {
				if (err.status === 401) {
					navigate('/')
				}
				setErrorMessage(err.message + ' ' + err.code)
				if (err.response.data) {
					setErrorMessage(err.response.data)
				}
			})

	}
	return (
		<div className='main-area'>
			<h2>Select Innmates to Checkout</h2>
			<div>
				{innmatesList.map((innmate, index) => (
					<div key={index} style={{ display: "flex", alignItems: "center" }}>
						<md-checkbox name={index} id={`check-${index}`} touch-target="wrapper" onInput={(e) => handleCheckboxChange(e, innmate.id)}></md-checkbox>

						<label htmlFor={`check-${index}`}>{innmate.name}</label>
					</div>
				))}
			</div>
			<p style={{ color: "red", fontSize: "16px", margin: "5px", paddingLeft: "20px" }}>{errorMessage}</p>

			<md-filled-button class="button-primary" style={{ alignSelf: "flex-end" }} onClick={() => handleSubmit()}>Submit</md-filled-button>
		</div>
	);
}

export default InnmatesCheckout;