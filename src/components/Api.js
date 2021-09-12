import React, { useEffect, useState } from 'react'
import './Api.css'

const Api = () => {
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
        { 
            date.map((curElem) => {
                return( 
                    <div className="bg">
<div className="days1">
<li> {curElem.date[8]}{curElem.date[9]}</li> 
<span className="pnl">{curElem.pnl} </span>
    </div>
     </div>    
                        );
        }
            )
            }
            </div>
   )}
    export default Api