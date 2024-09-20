import '@material/web/select/outlined-select'
import '@material/web/select/select-option'
import '@material/web/textfield/outlined-text-field'
import '@material/web/textfield/internal/outlined-text-field'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const NewComplaint = () => {
    const navigate = useNavigate();

    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [availableTime, setAvailableTime] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleNewCompliant = async () => {

        const id = localStorage.getItem('id');
        axios.post(`/compliants/${id}`, {
            "category": category,
            "title": title,
            "availableTime": availableTime,
            "description": description,
            "status": "Initiated"
        }).then((res) => {
            console.log(res);

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
        });
    }

    return (
        <div className='main-area' >
            <md-outlined-select
                label="Category"
                class="input-field"
                value={category}
                onInput={(e) => setCategory(e.target.value)}
            >
                <md-select-option value="Plumbing">
                    <div slot="headline">Plumbing</div>
                </md-select-option>
                <md-select-option value="Electrical">
                    <div slot="headline">Electrical</div>
                </md-select-option>
                <md-select-option value="Carpentering">
                    <div slot="headline">Carpentering</div>
                </md-select-option>
                <md-select-option value="Gardening">
                    <div slot="headline">Gardening</div>
                </md-select-option>
                <md-select-option value="Others">
                    <div slot="headline">Others</div>
                </md-select-option>
            </md-outlined-select>

            <md-outlined-text-field
                type="text"
                label="Title"
                class="input-field"
                value={title}
                onInput={(e) => setTitle(e.target.value)}>
            </md-outlined-text-field>

            <md-outlined-select
                label="Available Time"
                class="input-field"
                value={availableTime}
                onInput={(e) => setAvailableTime(e.target.value)}
            >
                <md-select-option value="9AM - 12NOON">
                    <div slot="headline">9AM - 12NOON</div>
                </md-select-option>
                <md-select-option value="12NOON - 6PM">
                    <div slot="headline">12NOON - 6PM</div>
                </md-select-option>
                <md-select-option value="Anytime">
                    <div slot="headline">Anytime</div>
                </md-select-option>
            </md-outlined-select>

            <md-outlined-text-field
                class="input-field"
                value={description}
                onInput={(e) => setDescription(e.target.value)}
                type="textarea"
                label="Description"
                rows="3"
            >
            </md-outlined-text-field>

            <p style={{ color: "red" }}>{errorMessage}</p>
            <md-filled-button class="button-primary" onClick={() => handleNewCompliant()}>Submit</md-filled-button>
        </div>
    );
}

export default NewComplaint;