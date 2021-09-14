import React, { useEffect, useState } from 'react'
import './Api.css'

const Api = () => {           // for fetching api
    const [date, setDate] = useState([]);

    const getDate = async () => {       
        const response = await fetch('https://api.jsonbin.io/b/613b31a19548541c29af5f98');
        setDate(await response.json());
        console.log(response);
        
    }

    useEffect(() => {
        getDate();
    }, []);
    
    return (
        
        <div className="body">
            <h1> Data Of </h1>
        { 
            date.map((curElem) => {     // for mapping api
                return( 
                    // for showing fetched data in API 
                    <div className="bg">        
                    
<div className="days1">
    {/* for showing date  */}
<li> {curElem.date[8]}{curElem.date[9]}</li>      
{/* for showing profits & loss  */}
<li className="pnl">{curElem.pnl} </li>

    </div>
     </div>    
                        );
        }
            )
            }
            </div>
   )}
    export default Api