import axios from 'axios'
import { useState } from 'react';
import { useLoaderData, useNavigate } from "react-router-dom";

const Innmates = () => {
    const data = useLoaderData();
    const navigate = useNavigate();

    const [innmates, setInnmates] = useState(data);

    const handleInnmateChange = (index, field, event) => {
        const values = [...innmates];
        values[index][field] = event.target.value;
        setInnmates(values)
        console.log(innmates);
    };

    const handleSubmit = () => {
        const id = localStorage.getItem('id')
        
        axios.put(`/innmates/${id}`, innmates)
        .then((res => {
            if (res.status === 200) {
                navigate(-1);
            }
        })).catch(() => {
        })
    }
    return (
        <>
            <div className='guest-details'>
                Innmates Details

                {innmates.map((e, i) => {
                    return (<div key={`innmate-${i + 1}`} >
                        <h3>Person {i + 1}</h3>

                        <md-outlined-text-field
                            type="text"
                            label="Name"
                            class="input-field"
                            id={`innmate-name-${i + 1}`}
                            value={e.name}
                            onInput={event => handleInnmateChange(i, 'name', event)}>

                        </md-outlined-text-field>
                        <md-outlined-select
                            label="Relation"
                            class="input-field"
                            onInput={event => handleInnmateChange(i, 'relation', event)}
                            value={e.relation}
                        >
                            <md-select-option value="Father">
                                <div slot="headline">Father</div>
                            </md-select-option>
                            <md-select-option value="Mother">
                                <div slot="headline">Mother</div>
                            </md-select-option>
                            <md-select-option value="Wife">
                                <div slot="headline">Wife</div>
                            </md-select-option>
                            <md-select-option value="Husband">
                                <div slot="headline">Husband</div>
                            </md-select-option>
                            <md-select-option value="Son">
                                <div slot="headline">Son</div>
                            </md-select-option>
                            <md-select-option value="Daughter">
                                <div slot="headline">Daughter</div>
                            </md-select-option>
                            <md-select-option value="Other">
                                <div slot="headline">Other</div>
                            </md-select-option>
                        </md-outlined-select>

                        <md-outlined-text-field
                            type="number"
                            label="Age"
                            min='1'
                            max='100'
                            class="input-field"
                            onInput={event => handleInnmateChange(i, 'age', event)}
                            value={e.age}>
                        </md-outlined-text-field>

                        <md-outlined-text-field
                            type="text"
                            label="Blood Group"
                            class="input-field"
                            onInput={event => handleInnmateChange(i, 'bloodGroup', event)}
                            value={e.bloodGroup}>
                        </md-outlined-text-field>

                        <md-outlined-text-field
                            type="number"
                            label="Aadhar No."
                            class="input-field"
                            onInput={event => handleInnmateChange(i, 'aadhar', event)}
                            value={e.aadhar}>
                        </md-outlined-text-field>

                        <md-outlined-select
                            label="Is Working"
                            class="input-field"
                            onInput={event => handleInnmateChange(i, 'working', event)}
                            value={e.working}>

                            <md-select-option value={true}>
                                <div slot="headline">Yes</div>
                            </md-select-option>
                            <md-select-option value={false}>
                                <div slot="headline">No</div>
                            </md-select-option>

                        </md-outlined-select>
                    </div>)
                })}
            </div>
            <div className='guest-submit'>
                <md-filled-button onClick={handleSubmit}>Submit</md-filled-button>
            </div>
        </>
    );
}

export default Innmates;