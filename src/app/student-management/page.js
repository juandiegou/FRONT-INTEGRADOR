'use client';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import StudentCard from '../components/student-card';
import makeRequest  from '../api/request';

export default function Student() {  

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }
    , []);

    const getStudents = () => {
        // makeRequest('get', 'Student')
        // .then((result) => {
        //   setStudents(result);
        //   console.log("results",result);
        // })
        // .catch((error) => {
        //   console.error('Error al obtener datos de la API:', error.message);
        // });
        makeRequest.get('Student').then((result) => {
            setStudents(result.data);
            console.log("results",result);
          }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        });
    }

    if(students === undefined) return (<div>Loading...</div>);

    return (
        <div>
            <div className="container mx-auto">
                <Header />
                <div className="flex flex-wrap">
                     {
                        students?.map(student => (
                            <StudentCard key={student.id} student={student} />   
                        ))}
                </div>
            </div>
        </div>
    );
}
