import '@material/web/select/outlined-select'
import '@material/web/select/select-option'
import '@material/web/textfield/outlined-text-field'
import '@material/web/textfield/internal/outlined-text-field'
import { useNavigate } from 'react-router-dom'

const NewComplaint = () => {
    const navigate = useNavigate();
    const handleNewCompliant = async () => {
        document.getElementById('newCompliantSubmit').disabled = true
        let category = document.getElementById('category').value
        let title = document.getElementById('compliant-title').value
        let availableTime = document.getElementById('compliant-available-time').value
        let description = document.getElementById('compliant-description').value

        const token = localStorage.getItem('token');
        const user = localStorage.getItem('username');

        fetch("http://localhost:8080/compliants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "category": category,
                "title": title,
                "availableTime": availableTime,
                "description": description,
                "issuedBy": user,
                "status": "Initiated",
            })
        }).then((res) => {
            if (res.ok) {
                navigate(-1);
                document.getElementById('newCompliantSubmit').disabled = false
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className='main-area' >

            <md-outlined-select label="Category" class="input-field" id='category'>
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
            <md-outlined-text-field type="text" label="Title" class="input-field" id='compliant-title'></md-outlined-text-field>
            {/* <md-outlined-text-field type="text" label="Quarters No."   class="input-field" id='compliant-quarters-no'></md-outlined-text-field> */}
            {/* <md-outlined-text-field type="text" label="Mobile No." class="input-field" id=''></md-outlined-text-field> */}

            <md-outlined-select label="Available Time" class="input-field" id='compliant-available-time'>
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

            <md-outlined-text-field class="input-field"
                type="textarea"
                label="Description"
                rows="3"
                id='compliant-description'
            >
            </md-outlined-text-field>


            <md-filled-button class="button-primary" id="newCompliantSubmit" onClick={() => handleNewCompliant()}>Submit</md-filled-button>
        </div>
    );
}

export default NewComplaint;