import { useState } from "react";

const Innmates = () => {

    let innmatesCount;
    let fields = [];
    const [field, setField] = useState(fields);
    const [message, setMessage] = useState('');
    const [count,setCount] = useState(1);
    const handleMessageChange = event => {
        // 👇️ access textarea value
        setMessage(event.target.value);
        console.log(event.target.value);
        console.log(message);
        console.log(count);
      };
    // useEffect(()=>{
    //     console.log("effect called");
    // },[URL])
    return (

                <div className='main-area'>
                    <div>
                        <md-outlined-text-field id="innmatesCount" type="number" inputmode label="No. of innmates" min='1' max='10' class="input-field" onChange={handleMessageChange}></md-outlined-text-field>
                        <md-filled-button class="button-primary" onClick={(e)=>{
                            // e.preventDefault();
                            innmatesCount = document.getElementById("innmatesCount").value;
                            setCount(innmatesCount)
                            console.log(innmatesCount);
                            // fields.length = 0;
                            console.log(fields)
                            for (let i = 1; i <= innmatesCount; i++) {
                            fields.push(
                                <div id={i} key={i} >
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
                                <md-outlined-text-field  type="number" inputmode label="Age" min='1' max='100' class="input-field" onChange={handleMessageChange}></md-outlined-text-field>
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


                            </div>
                        );
                            }
                            setField(fields);
                            console.log(fields);
                        }}>Submit</md-filled-button>
                        
                    </div>
                    {field}
                </div>
     );
}
 
export default Innmates;