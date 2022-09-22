import React, { useState } from "react";
 
 
const Form = () => {
 
    const [taskname, setTaskname] = useState('');
  
 
    function onSetTaskname(e) {
        setTaskname(e.target.value)
    }
   
 
    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('taskname', taskname);
       
    }
 
    function getData() {
        console.log(localStorage.getItem('taskname'));
        
    }
    return (
        <>
            <div>
                <h1>TODO's</h1>
 
                <div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>Taskname</label>
                            <input type="text" value={taskname} onChange={onSetTaskname} />
                        </div>
                        
                        <button type="submit">Submit</button>
                        <br/>
                        <button type="button" onClick={getData}>Get Data</button>
                    </form>
                </div>
            </div>
        </>
    );
};
 
export default Form;
