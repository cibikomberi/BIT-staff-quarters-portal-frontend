import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InnmateAdd = () => {

    const navigate = useNavigate();

    const [innmateName, setInnmateName] = useState('');
    const [relation, setRelation] = useState('');
    const [age, setAge] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [workStatus, setWorkStatus] = useState('');

    const handleNewInnmate = async () => {
        const id = localStorage.getItem('id');;
        await axios.post(`/innmates/${id}`, {
            "name": innmateName,
            "relation": relation,
            "age": age,
            "isStaying": true,
            "bloodGroup": bloodGroup,
            "aadhar": aadhar,
            "isWorking": workStatus
        }).then((res) => {
            if(res.status === 200){
                navigate(-1);
            }
        })
    }

    return (
        <>
            <div>
                <h3>Add Innmate</h3>
                <md-outlined-text-field
                    type="text"
                    label="Name"
                    class="input-field"
                    value={innmateName}
                    onInput={(e) => setInnmateName(e.target.value)}>
                </md-outlined-text-field>

                <md-outlined-select
                    label="Relation"
                    class="input-field"
                    value={relation}
                    onInput={(e) => setRelation(e.target.value)}>
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
                    inputmode
                    label="Age"
                    min='1'
                    max='100'
                    class="input-field"
                    value={age}
                    onInput={(e) => setAge(e.target.value)}>
                </md-outlined-text-field>

                <md-outlined-text-field
                    type="text"
                    label="Blood Group"
                    class="input-field"
                    value={bloodGroup}
                    onInput={(e) => setBloodGroup(e.target.value)}>
                </md-outlined-text-field>

                <md-outlined-text-field
                    type="number"
                    label="Aadhar No."
                    class="input-field"
                    value={aadhar}
                    onInput={(e) => setAadhar(e.target.value)}>
                </md-outlined-text-field>

                <md-outlined-select
                    label="Is Working"
                    class="input-field"
                    value={workStatus}
                    onInput={(e) => setWorkStatus(e.target.value)}>
                    <md-select-option value="true">
                        <div slot="headline">Yes</div>
                    </md-select-option>
                    <md-select-option value="false">
                        <div slot="headline">No</div>
                    </md-select-option>
                </md-outlined-select>
            </div>

            <div className='guest-submit'>
                <md-filled-button onClick={() => handleNewInnmate()}>Submit</md-filled-button>
            </div>
        </>
    );
}

export default InnmateAdd;