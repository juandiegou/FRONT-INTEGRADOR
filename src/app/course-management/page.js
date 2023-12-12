'use client';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import makeRequest  from '../api/request';
import CourseCard from "../components/course-card";


export default function Index() {
    const [courses, setcourses] = useState([]);

    useEffect(() => {
        getcourses();
    }
    , []);

    const getcourses = () => {
        // makeRequest('get', 'Subject')
        // .then((result) => {
        //   setcourses(result);
        //   console.log("results",result);
        // })
        // .catch((error) => {
        //   console.error('Error al obtener datos de la API:', error.message);
        // });
        makeRequest.get('Subject').then((result) => {
            setcourses(result.data);
            console.log("results",result);
          }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        });
       
    }

    if(courses === undefined) return (<div>Loading...</div>);

    return (
        <div>
            <div className="container mx-auto">
                <Header />
                <div className="flex flex-wrap">
                     {
                        courses?.map(course => (
                            <CourseCard key={course.id} course={course} />  
                             
                        ))}
                </div>
            </div>
        </div>
    );
}