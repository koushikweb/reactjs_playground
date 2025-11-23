import React, { useEffect, useState } from "react";

const UserData = () => {
    const [userArr, setUserArr] = useState([]);

    useEffect(()=> {
      const fetchData = async() => {
        try{
          await fetch("https://jsonplaceholder.typicode.com/todos").
          then((response) => response.json()).
          then((data) => setUserArr(data));
        }catch(e) {
            e.message();
        }finally{
            console.log("Under finaly block");
        }
      }
      fetchData();
    }, []);

     return (
         <> 
          <table>
            <tbody>
             {
             userArr.map((udata) => (
                    <tr key={udata?.id}>
                        <td>{udata?.title}
                        </td>
                    </tr>
             ))}
             </tbody>
          </table>
         </>
     )
};

export default  UserData;