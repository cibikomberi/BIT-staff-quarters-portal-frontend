import { useState } from "react";

const Innmates = () => {
    const [guestCount, setGuestCount] = useState(3);

    const handleInnmateCount = () => {
        let innmatesCount = document.getElementById("innmatesCount").value;
        console.log(typeof (count));

        setCount(innmatesCount)
        setGuestCount(innmatesCount)
        console.log(guestCount);

    }

    const [count, setCount] = useState(1);


    return (

        <>
            <md-outlined-text-field id="innmatesCount" type="number" inputmode label="No. of innmates" min='1' max='10' class="input-field"></md-outlined-text-field>
            <md-filled-button class="button-primary" onClick={() => handleInnmateCount()}>Submit</md-filled-button>{count}

            <div className='guest-details'>
                Guest Details
                {[...Array(guestCount)].map((e, i) => <div id={i} key={i} >
                    <h3>Person {i}</h3>
                    <md-outlined-text-field type="text" label="Name" class="input-field" ></md-outlined-text-field>
                    <md-outlined-select label="Relation" class="input-field">
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
                    <md-outlined-text-field type="number" inputmode label="Age" min='1' max='100' class="input-field"></md-outlined-text-field>
                    <md-outlined-text-field type="text" label="Blood Group" class="input-field" ></md-outlined-text-field>
                    <md-outlined-text-field type="number" label="Aadhar No." class="input-field" ></md-outlined-text-field>
                    <md-outlined-select label="Is Working" class="input-field">
                        <md-select-option value="Yes">
                            <div slot="headline">Yes</div>
                        </md-select-option>
                        <md-select-option value="No">
                            <div slot="headline">No</div>
                        </md-select-option>
                    </md-outlined-select>
                </div>)}
            </div>

            <div className='guest-submit'>
                <md-filled-button>Submit</md-filled-button>
            </div>
        </>
    );
}

export default Innmates;