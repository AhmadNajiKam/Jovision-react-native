'use strict';

export let getIpAsync = async ()=>{
    try{
        let data = await fetch('https://api.ipify.org');
        return (await data.text());
    }
    catch (error){
    console.log("Error in fetching non-blocking request",error);
    }
}


export let getIpBlocking = (fun) => {
    fun(true);
    let IP = fetch('https://api.ipify.org')
        .then(response => response.text()) // Parse response as JSON
        .then(data => {return data}) // Return the IP address from the second `then`
        .catch(error => {
            console.log("Error fetching IP", error);
        
            throw error; // Rethrow the error to propagate it to the caller
        })
        .finally(() => {
            fun(false); // Always reset loading state
        });
        return IP;
};
