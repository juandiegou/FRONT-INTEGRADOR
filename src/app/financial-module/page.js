'use client';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import makeRequest  from '../api/request';
import FinanceCard from "../components/finance-card";

export default function Index() {

    const [cohorts, setcohorts] = useState([]);

    useEffect(() => {
        getcohorts();
    }
    , []);

    const getcohorts = () => {
        // makeRequest('get', 'Cohort')
        // .then((result) => {
        //   setcohorts(result);
        //   console.log("results",result);
        // })
        // .catch((error) => {
        //   console.error('Error al obtener datos de la API:', error.message);
        // });
        makeRequest.get('Cohort').then((result) => {
            setcohorts(result.data);
            console.log("results",result);
          }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        }); 
       
    }

    if(cohorts === undefined) return (<div>Loading...</div>);

    return (
        <div>
            <div className="container mx-auto">
                <Header />
                <div className="flex flex-wrap">
                     {
                        cohorts?.map(cohort => (
                            <FinanceCard key={cohort.id} cohort={cohort} />  
                             
                        ))}
                </div>
            </div>
        </div>
    );
}
