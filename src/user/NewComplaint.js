import '@material/web/select/outlined-select'
import '@material/web/select/select-option'
import '@material/web/textfield/outlined-text-field'
import '@material/web/textfield/internal/outlined-text-field'

const NewComplaint = () => {


    return ( 
            <div className='main-area' >
            <md-outlined-select label="Category" class="input-field">
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
            <md-outlined-text-field type="text" label="Name" class="input-field" ></md-outlined-text-field>
            <md-outlined-text-field type="text" label="Quarters No."   class="input-field" ></md-outlined-text-field>
            <md-outlined-text-field type="text" label="Mobile No." class="input-field" ></md-outlined-text-field>

            <md-outlined-select label="Available Time" class="input-field">
                <md-select-option value="apple">
                    <div slot="headline">9AM - 12NOON</div>
                </md-select-option>
                <md-select-option value="tomato">
                    <div slot="headline">12NOON - 6PM</div>
                </md-select-option>
                <md-select-option value="tomato">
                    <div slot="headline">Anytime</div>
                </md-select-option>
            </md-outlined-select>

            <md-outlined-text-field class="input-field"
                type="textarea"
                label="Description"
                rows="3"
                >
            </md-outlined-text-field>


            <md-filled-button class="login-button">Submit</md-filled-button>
        </div>
     );
}
 
export default NewComplaint;