const InnmateAdd = () => {

    const handleNewInnmate = () => {       

        let name = document.getElementById(`innmate-name`).value;
        let relation = document.getElementById(`innmate-relation`).value;
        let age = document.getElementById(`innmate-age`).value;
        let bloodGroup = document.getElementById(`innmate-bg`).value;
        let aadhar = document.getElementById(`innmate-aadhar`).value;
        let workStatus = document.getElementById(`innmate-work`).value;
        fetch("http://localhost:8080/innmates",{ method: "POST", 
            headers: {
            "Content-Type": "application/json"},
            body: JSON.stringify({
                "name": name,
                "relation": relation,
                "age": age,
                "bloodGroup": bloodGroup,
                "aadhar": aadhar,
                "working": workStatus
            })
          });
    }

    return ( 
        <>
                <div id={`innmate-`} key={`innmate-`} >
                    <h3>Add Innmate</h3>
                    <md-outlined-text-field type="text" label="Name" class="input-field" id={`innmate-name`}></md-outlined-text-field>
                    <md-outlined-select label="Relation" class="input-field" id={`innmate-relation`}>
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
                    <md-outlined-text-field type="number" inputmode label="Age" min='1' max='100' class="input-field" id={`innmate-age`}></md-outlined-text-field>
                    <md-outlined-text-field type="text" label="Blood Group" class="input-field" id={`innmate-bg`}></md-outlined-text-field>
                    <md-outlined-text-field type="number" label="Aadhar No." class="input-field" id={`innmate-aadhar`}></md-outlined-text-field>
                    <md-outlined-select label="Is Working" class="input-field" id={`innmate-work`}>
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