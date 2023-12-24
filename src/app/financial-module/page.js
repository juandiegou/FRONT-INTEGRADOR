'use client';
import { useState, useEffect } from 'react';
import CreateCohort from '../components/create-cohort';
import Header from '../components/header';
import makeRequest  from '../api/request';
import FinanceCard from "../components/finance-card";

export default function Index({}) {

    const [cohorts, setcohorts] = useState([]);
    const [createCohort, setCreateCohort] = useState(false);

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

    const handleCreateCohort = () => {
        setCreateCohort(!createCohort);
    }

    if(cohorts === undefined) return (<div>Loading...</div>);

    return (
        <>
            {
                createCohort ? (
                    <CreateCohort onCreate={createCohort} />
                )       
                : (
                    <>
                    <Header />
                    <div className="flex flex-wrap">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleCreateCohort}
                        >
                            Nueva Cohorte
                        </button>
                    </div>
                    <div className="flex flex-wrap">
                         {
                            cohorts?.map(cohort => (
                                <FinanceCard key={cohort.id} cohort={cohort} />  
                                 
                            ))}
                    </div>
                </>
                )
            }

        </>
    );
}
