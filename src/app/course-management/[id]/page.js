"use client";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import React, { useState, useEffect } from "react";
import Loader from "../../components/loader";
import EditCourseForm from "../../components/edit-course";
import Header from "../../components/header";
import makeRequest from '../../api/request';

const CourseComponent = ( course ) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [courseData, setcourseData] = useState(null);
    const handleEditClick = () => {
      setIsEditMode(true);
    };

  
    const handleSaveChanges = (editedcourse) => {

        console.log("Saving changes:", editedcourse);
        setIsEditMode(false);
        setcourseData(editedcourse);    
    };

    useEffect(() => {
        // console.log("course", course.params.id);
        // makeRequest('get', `Subject/${course.params.id}`).then((result) => {
        //     setcourseData(result);
        //     console.log("results", result);
        //   })
        makeRequest.get(`Subject/${course.params.id}`).then((result) => {
            setcourseData(result.data);
            console.log("results", result);
          }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        });
    }, [course]);
    
    const cancelEdit = () => {
        setIsEditMode(false);
    };

    const deleteCourse = () => {
        makeRequest.delete(`Subject/${course.params.id}`).then((result) => {
            console.log("results", result);
            }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        }).finally(() => {
            window.location.href = '/course-management';
        });
    }
  
    if (course === undefined) return <Loader />; 

    return (
        <>
        {isEditMode ? (
          <EditCourseForm course={courseData} onSave={handleSaveChanges} changeEdit={cancelEdit} />
        ) : (
            <div className="container w-full">
                <Header />
                <div className="w-full p-2">
                    <div className="bg-white border rounded shadow-md p-4">
                        <div className="flex justify-end">
                            <button className="text-blue-500 hover:underline grid gap-4 grid-cols-2"
                                onClick={deleteCourse}
                            >
                                < div className='w/2'>                                
                                    Delete Course
                                </div>
                                <div className='w/2'>
                                    <AiFillDelete size={20} title='Delete Profile' />
                                </div>
                            </button>
                            <button
                        
                                className="text-blue-500 hover:underline grid gap-4 grid-cols-2"
                                onClick={handleEditClick}
                            >
                                <div className='w/2'>
                                    Edit Course
                                </div>
                                <div className='w/2'>
                                    <AiFillEdit size={20} title='Edit Profile' />
                                </div>
                            </button>
                        </div>  
                    <div className="flex items-center">
                        <div className="w-1/3 md:w-1/5 lg:w-1/4">
                        <img
                            src="https://bootdey.com/img/Content/avatar/avatar8.png"
                            alt="image"
                            className="w-full rounded-full border"
                        />
                        </div>
                        <div className="w-2/3 md:w-4/5 lg:w-3/4 ml-4">
                        <h5 className="text-xl font-bold">
                            Materia:{courseData?.name ? courseData.name : "sin nombre"}
                        </h5>
                        <p className="text-gray-700">
                            Profesor:{courseData?.teacher?.name? courseData.teacher.name : "Sin profesor"}
                        </p>

                        </div>
                    </div>

                    </div>
                </div>
            </div>
        )}
      </>
    );
};

export default CourseComponent;
