import { useState } from 'react';
import './toggleBtn.css'
function ToggleBtn(props){
    const [btnColorPrimary,btnColorPrimaryUpdate] = useState(true);
    return (
        <button className={btnColorPrimary? 'primaryBtn': 'secBtn'} onClick={()=>{btnColorPrimaryUpdate(!btnColorPrimary)}}>{props.text}</button>
    );
}
export default ToggleBtn;