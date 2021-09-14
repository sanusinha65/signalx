import React, { useEffect, useState } from 'react'
import './Api.css'

const Serv = () => {           // for fetching api
    const [services, setServices] = useState([]);

    const getServices = async () => {       
        const response = await fetch('http://13.127.45.20:3001/service/service-getAll/Delhi');
        setServices(await response.json());
        console.log(response);
        
    }

    useEffect(() => {
        getServices();
    }, []);
    
    return (
        
        <div className="body">
            <h1> Data Of </h1>
        { 
            services.map((curElem) => {     // for mapping api
                return( 
                    // for showing fetched data in API 
                    <div className="bg">        
                    

 <p> { curElem.Service.category }</p>


     </div>    
                        );
        }
            )
            }
            </div>
   )}
    export default Serv