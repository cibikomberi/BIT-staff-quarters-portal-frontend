import { useEffect, useRef, useState } from "react";
import axios from '../api/axios'
import { useLoaderData, useNavigate } from "react-router-dom";

const Innmates = () => {
    const data = useLoaderData();
    console.log(data);

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        // innmatesCount.current.value = data.length;
        // data.map((e,i)=>{
        //     document.getElementById(`innmate-name-${i+1}`).value = e.name;
        //     document.getElementById(`innmate-relation-${i+1}`).value = e.relation;
        //     document.getElementById(`innmate-age-${i+1}`).value = e.age;
        //     document.getElementById(`innmate-bg-${i+1}`).value = e.bloodGroup;
        //     document.getElementById(`innmate-aadhar-${i+1}`).value = e.aadhar;
        //     document.getElementById(`innmate-work-${i+1}`).value = String(e.working);
        // })
    });


    const [guestCount, setGuestCount] = useState(data.length);

    axios.put(`/innmates/update`, {
        
    }).then((res => {
        if (res.status === 200) {
            navigate(-1);
        }
    })).catch(() => {
    })

const handleChange = (e) => {
    console.log(e);
    
}
    return (

        <>

            <div className='guest-details'>
                Innmates Details

                {data.map((e, i) => {
                    return (<div id={`innmate-${i + 1}`} key={`innmate-${i + 1}`} >
                        <h3>Person {i + 1}</h3>
                        <md-outlined-text-field type="text" label="Name" class="input-field" id={`innmate-name-${i + 1}`} value={e.name} onInput={event => handleChange(event)}></md-outlined-text-field>
                        <md-outlined-select label="Relation" class="input-field" id={`innmate-relation-${i + 1}`} value = {e.relation}>
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
                        <md-outlined-text-field type="number" inputmode label="Age" min='1' max='100' class="input-field" id={`innmate-age-${i + 1}`} value = {e.age}></md-outlined-text-field>
                        <md-outlined-text-field type="text" label="Blood Group" class="input-field" id={`innmate-bg-${i + 1}`} value = {e.bloodGroup}></md-outlined-text-field>
                        <md-outlined-text-field type="number" label="Aadhar No." class="input-field" id={`innmate-aadhar-${i + 1}`} value = {e.aadhar}></md-outlined-text-field>
                        <md-outlined-select label="Is Working" class="input-field" id={`innmate-work-${i + 1}`} value = {e.working}>
                            <md-select-option value="true">
                                <div slot="headline">Yes</div>
                            </md-select-option>
                            <md-select-option value="false">
                                <div slot="headline">No</div>
                            </md-select-option>
                        </md-outlined-select>
                    </div>)
                })}
            </div>
{data.map((e) => {<p>e</p>})}
            <div className='guest-submit'>
                <md-filled-button>Submit</md-filled-button>
            </div>
        </>
    );
}

export default Innmates;