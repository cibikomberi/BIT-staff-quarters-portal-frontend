import './style/guest.css'
import axios from 'axios'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Guest = () => {

	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState('');
	const [fields, setFields] = useState(['']);
	const [guestCount, setGuestCount] = useState(1);
	const [place, setPlace] = useState('');
	const [fromDate, setFromDate] = useState('');
	const [toDate, setToDate] = useState('');

	function countInc() {
		if (guestCount < 5) {
			setGuestCount(guestCount + 1);
			addField();
		}
	}
	function countDec() {
		if (guestCount > 1) {
			removeField(guestCount - 1);
			setGuestCount(guestCount - 1);
		}
	}

	const handleFieldChange = (index, event) => {
		const values = [...fields];
		values[index] = event.target.value;
		setFields(values);
	};

	const addField = () => {
		setFields([...fields, '']);
	};

	const removeField = (index) => {
		const values = [...fields];
		values.splice(index, 1);
		setFields(values);
	};

	const handleNewGuest = async () => {
		const id = localStorage.getItem('id')

		await axios.post(`/guests/user/${id}`,
			fields.map((name) => ({
				'name': name,
				'place': place,
				'fromDate': fromDate,
				'toDate': toDate
			}))
		).then((res) => {
			if (res.status === 200) {
				navigate(-1);
			}
		}).catch((err) => {
			if (err.status === 401) {
				navigate('/')
			}
			setErrorMessage(err.message + ' ' + err.code)
			if (err.response && err.response.data && !err.response.data.message) {
				setErrorMessage(err.response.data)
			}
			if (err.response && err.response.data && err.response.data.message) {
				setErrorMessage(err.response.data.message)
			}
		});
	}

	return (
		<>
			<div className='guest-count'>
				<md-icon-button onClick={countDec}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M200-440v-80h560v80H200Z" /></svg></md-icon-button>
				{guestCount}
				<md-icon-button onClick={countInc}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg></md-icon-button>
			</div>

			<div className='guest-data'>
				<md-outlined-text-field
					label="From City"
					value={place}
					onInput={(e) => setPlace(e.target.value)}>
					<svg slot='leading-icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
				</md-outlined-text-field>
				<md-outlined-text-field
					label="From Date"
					type='date'
					value={fromDate}
					onInput={(e) => setFromDate(e.target.value)}>
					<svg slot='leading-icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
				</md-outlined-text-field>
				<md-outlined-text-field
					label="To Date"
					type='date'
					value={toDate}
					onInput={(e) => setToDate(e.target.value)}>
					<svg slot='leading-icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
				</md-outlined-text-field>
			</div>

			<div className='guest-details'>
				Guest Details

				{fields.map((_, i) =>
					<md-outlined-text-field
						label={`Guest ${i + 1}`}
						type='text'
						key={`guest-${i + 1}`}
						onInput={(e) => { handleFieldChange(i, e) }}>
						<svg slot='leading-icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
					</md-outlined-text-field>
				)}
			</div>
			<p style={{ color: "red",textAlign:"center" }}>{errorMessage}</p>

			<div className='guest-submit'>
				<md-filled-button onClick={() => handleNewGuest()}>Submit</md-filled-button>
			</div>

		</>
	);
};

export default Guest;