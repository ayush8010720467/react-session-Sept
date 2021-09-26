import { useState } from 'react';
import './toggleBtn.css'
function ToggleBtn(props){
    const [btnColorPrimary,btnColorPrimaryUpdate] = useState(false);
    return (
        <button className={btnColorPrimary? 'primaryBtn': 'secBtn'} onClick={()=>{btnColorPrimaryUpdate(!btnColorPrimary);props.toggle();}}>{props.text}</button>
    );
}
export default ToggleBtn;