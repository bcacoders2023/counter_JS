    const countvalue=document.querySelector('#counter');
    const neg=()=>{
        //get the value from Ui
        let value=parseInt(countvalue.innerText);
        //update the value
        value=value-1;
        //set the value
        countvalue.innerText=value;
    }
    const plus=()=>{
        let value=parseInt(countvalue.innerText);
        //update the value
        value=value+1;
        // set the value
        countvalue.innerText=value;
    }