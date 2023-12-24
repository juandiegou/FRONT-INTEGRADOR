"use client";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import React, { useState, useEffect } from "react";
import redirect from 'next/navigation'
import Loader from "../../components/loader";
import EditStudentForm from "../../components/edit-student";
import ConfirmDelete from "../../components/confirm-delete";
import Header from "../../components/header";
import makeRequest from '../../api/request';


const StudentComponent = (student) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [Delete, setDelete] = useState(false);
    const [studentData, setStudentData] = useState(null);

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSaveChanges = (editedStudent) => {

        console.log("Saving changes:", editedStudent);
        makeRequest.put(`Student/${studentData.id}`, editedStudent).then((result) => {
            console.log("results", result.data);
        }).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        });
        setIsEditMode(false);
        setStudentData(editedStudent);

    };


    const handleDeleteClick = () => {
        setDelete(!Delete);
    };


    const handleDelete = () => {
        console.log("Deleting student:", studentData);
        makeRequest.delete(`Student/${studentData.id}`).then((result) => {
            setDelete(false);
            window.location.href = '/student-management';
        }).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        });
    };



    useEffect(() => {
        makeRequest.get(`Student/${student.params.id}`).then((result) => {
            setStudentData(result.data);
            console.log("results", result);
        }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        });
    }, [student]);

    const cancelEdit = () => {
        setIsEditMode(false);
    };

    if (student === undefined) return <Loader />;

    return (
        <>
            {
                Delete ? (
                    <ConfirmDelete onDelete={handleDelete} onCancel={handleDeleteClick} type="Student" />
                ) : (

                    <>
                        {isEditMode ? (
                            <EditStudentForm student={studentData} onSave={handleSaveChanges} changeEdit={cancelEdit} />
                        ) : (
                            <div className="container w-full">
                                <Header />
                                <div className="w-full p-2">
                                    <div className="bg-white border rounded shadow-md p-4">
                                        <div className="flex justify-end">
                                            <button className="text-blue-500 hover:underline grid gap-4 grid-cols-2"
                                                onClick={handleDeleteClick}
                                            >
                                                < div className='w/2'>
                                                    Delete Profile
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
                                                    Edit Profile
                                                </div>
                                                <div className='w/2'>
                                                    <AiFillEdit size={20} title='Edit Profile' />
                                                </div>
                                            </button>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-1/3 md:w-1/5 lg:w-1/4">
                                                <img
                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                    alt=""
                                                    className="w-full rounded-full border"
                                                />
                                            </div>
                                            <div className="w-2/3 md:w-4/5 lg:w-3/4 ml-4">
                                                <h5 className="text-xl font-bold">
                                                    Nombre:{studentData?.name ? studentData.name : "sin nombre"}
                                                </h5>
                                                <p className="text-gray-700">
                                                    Correo:{studentData?.email ? studentData.email : "Sin correo"}
                                                </p>
                                                <p className="text-gray-700">
                                                    Código:{studentData?.code ? studentData.code : "Sin código"}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-4 border-t">
                                            <div className="flex justify-around">
                                                <div className="text-center">
                                                    <h6>Documento</h6>
                                                    <h6>{studentData?.document ? studentData.document : 'Sin Documento'}</h6>
                                                </div>
                                                <div className="text-center">
                                                    <h6>Teléfono</h6>
                                                    <h6>{studentData?.phone ? studentData.phone : 'Sin telefono'}</h6>
                                                </div>
                                                <div className="text-center">
                                                    <h6>Dirección</h6>
                                                    <h6>{studentData?.address ? studentData.address : "Sin dirección"}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )
            }

        </>
    );
};

export default StudentComponent;
