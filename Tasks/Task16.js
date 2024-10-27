'use strict'
import { useState } from 'react';
import ShowNameButton from '../Components/ShowNameButtonCom';
const Task16 = () =>{
    const [Hidden,setHidden] = useState(true);
    const name = "ahmad";
    function ShowMyName(){
        setHidden(!Hidden);
    }
    return (<ShowNameButton press={ShowMyName} state={Hidden} name={name} title="Show"></ShowNameButton>
    );
} 


export default Task16;
