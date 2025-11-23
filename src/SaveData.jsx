import React, { useState } from "react";

 const SaveData = () => {
    const [count, setCount] = useState(0);

    const handlesubmit = (event) =>
    {
         event.preventDefault();
         const formData = new FormData(event.target);
         setCount(count+formData.get('cnt'));
       
    }
 
    return (<> 
        {`Count is  : ${count}`}
         <form onSubmit={handlesubmit}>
            <input type="text" id="cnt" name="cnt"/> 
            <input type="submit" name="save" value="save" />
         </form>
    </>)

 }
 export default SaveData;