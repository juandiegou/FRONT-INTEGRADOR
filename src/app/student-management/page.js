'use client';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import StudentCard from '../components/student-card';
import makeRequest  from '../api/request';
import CreateStudent from '../components/create-student';

export default function Student() {  

    const [students, setStudents] = useState([]);
    const [creating, setCreating] = useState(false);

    useEffect(() => {
        getStudents();
    }
    , []);

    const getStudents = () => {
        makeRequest.get('Student').then((result) => {
            setStudents(result.data);
            console.log("results",result);
          }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        });
    }

    const onClose = () => {
        setCreating(false);
        getStudents();
    }

    if(students === undefined) return (<div>Loading...</div>);

    return (
        <>
          { creating ? (
                <CreateStudent onClose={onClose} />
            ) : (
                <>
                    <Header />
                    <div className="flex flex-wrap">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCreating(true)}>Crear estudiante</button>
                    </div>
                    <div className="flex flex-wrap">
                        {
                            students?.map(student => (
                                <StudentCard key={student.id} student={student} />  
                            ))
                        }
                    </div>
                </>
            )}

        </>
    );
}
