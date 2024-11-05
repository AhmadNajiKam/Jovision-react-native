'use strict';

import MyClassPage2 from "../Components/MyClassPage2";
import { useState } from 'react';


const Task20 = () => {

    const [Loaded,setLoaded] = useState(true);
    setTimeout(()=>{setLoaded(false);},10000)
    return (<> 
    {Loaded && <MyClassPage2></MyClassPage2>}
    </>
  );
}
export default Task20;