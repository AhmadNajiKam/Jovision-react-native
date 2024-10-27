'use strict'
import { useState } from 'react';

import ShowNameButton from "../Components/ShowNameButtonCom";
const Task17 = () =>{
    const [Hidden,setHidden] = useState(true);
    const [button,setButton] = useState('Show');
    const name = "ahmad";
    function ChangeButtonText(){
        setHidden(!Hidden);
        Hidden ? setButton('Hide'):setButton('Show');
    }
return (
<ShowNameButton press={ChangeButtonText} state={Hidden} name={name} title={button}></ShowNameButton>

);

}
export default Task17;
