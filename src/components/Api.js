import React, { useEffect, useState } from 'react'
import './Api.css'

const Api = () => {           // for fetching api
    const [date, setDate] = useState([]);    // using states 

    const getDate = async () => {              // using async method to get data
        const response = await fetch('https://api.jsonbin.io/b/613b31a19548541c29af5f98');       
        setDate(await response.json());
        console.log(response);
        
    }

    useEffect(() => {
        getDate();
    }, []);
    
    return (
        // for displaying fetched data 
        <div className="body">
            <div className="rect"> </div>
            <h1 className="head1"> DATA OF PROFIT & LOSS MONTH WISE </h1>
        { 
            date.map((curElem) => {   
                 // for mapping api
                return( 
                    // for showing fetched data in API 
                    <div className="bg">        
                    
<div className="days1">
    {/* for showing date & month  */}
<li> {curElem.date[8]}{curElem.date[9]}{curElem.date[7]}{curElem.date[5]}{curElem.date[6]}</li>      
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