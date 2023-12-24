'use client';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import makeRequest  from '../api/request';
import CourseCard from "../components/course-card";
import CreateCourse from "../components/create-course";

export default function Index() {
    const [courses, setcourses] = useState([]);
    const [creating, setCreating] = useState(false);
    useEffect(() => {
        getcourses();
    }
    , []);

    const getcourses = () => {
        makeRequest.get('Subject').then((result) => {
            setcourses(result.data);
            console.log("results",result);
          }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        });
       
    }

    const onClose = () => {
        setCreating(false);
        getcourses();
    }

    if(courses === undefined) return (<div>Loading...</div>);

    return (
        <>
            {
                creating ? (
                    <CreateCourse onClose={onClose} />
                ) : (
                    <>
                        <Header />
                        <div className="">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCreating(true)}>Crear curso</button>
                        </div>
                        <div className="flex flex-wrap">
                            {
                                courses?.map(course => (
                                    <CourseCard key={course.id} course={course} />  
                                ))
                            }
                        </div>
                    </>
                )
            }

        </>
    );
}