"use client";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "../../components/loader";
import format from 'date-fns/format';
import ReistrationCard from "../../components/registration-card";
import ExpenseCard from "../../components/expense-card";
import EditcohortForm from "../../components/edit-cohort";
import Header from "../../components/header";
import makeRequest from '../../api/request';
import ConfirmDelete from '../../components/confirm-delete';


const cohortComponent = (  cohort ) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [ShowRegistration, setShowRegistration] = useState(false);
    const [ShowExpense, setShowExpense] = useState(false);
    const [Delete, setDelete] = useState(false);
    const [Amount, setAmount] = useState(0);

    const [cohortData, setcohortData] = useState(null);
    const handleEditClick = () => {
      setIsEditMode(true);
    };
  
    const handleSaveChanges = (editedCohort) => {

      console.log("Saving changes:", editedCohort);
      setIsEditMode(false);
    };

    const handleShowRegistration = () => {
        console.log("show registration", ShowRegistration);
        setShowRegistration(!ShowRegistration);
    }

    const handleShowExpense = () => {
        setShowExpense(!ShowExpense);
    }

    const handleDelete = () => {
        console.log("Deleting cohort:", cohortData);
        makeRequest.delete(`Cohort/${cohortData.id}`).then((result) => {
            setDelete(false);
            window.location.href = '/financial-module';
        }).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        });
    };

    useEffect(() => {
        makeRequest.get(`Cohort/${cohort.params.id}`).then((result) => {
            setcohortData(result.data);
            console.log("results", result);
            for(let i=0;i<result.data.expense.length;i++){
                setAmount(Amount+Number(result.data.expense[i].total));
            }
          }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        });
    }, [cohort]);
    
    const cancelEdit = () => {
        setIsEditMode(false);
    };

    const handleDeleteClick = () => {
        setDelete(!Delete);
    };

  
    if (cohort === undefined) return <Loader />; 

    return (
        <>
            {
                Delete?(
                    <div className="modal">
                       <ConfirmDelete onDelete={handleDelete} onCancel={handleDeleteClick} type="cohort" />
                    </div>
                ):(
                    <>
                        {isEditMode ? (
                         <EditcohortForm cohort={cohortData} onSave={handleSaveChanges} changeEdit={cancelEdit}  />
                        ) : (
                                <div className="container w-full">
                                    <Header />
                                    <div className="w-full p-2">
                                        <div className="bg-white border rounded shadow-md p-4">
                                            <div className="flex justify-end">
                                                <button 
                                                    className="text-blue-500 hover:underline grid gap-4 grid-cols-2"
                                                    onClick={handleDeleteClick}
                                                >
                                                    < div className='w/2'>                                
                                                        Delete Cohort
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
                                                        Edit Cohort
                                                    </div>
                                                    <div className='w/2'>
                                                        <AiFillEdit size={20} title='Edit Profile' />
                                                    </div>
                                                </button>
                                            </div>  
                                        <div className="flex items-center">
                                            <div className="w-2/3 md:w-4/5 lg:w-3/4 ml-4">
                                            <h5 className="text-xl font-bold">
                                            Cohorte #: {cohortData?.id ? cohortData.id : "sin nombre"}
                                            </h5>
                                            <p className="text-gray-700">
                                                {cohortData?.agreement ? "Con convenio" : "sin convenio"}
                                            </p>
                                            </div>
                                        </div>
                                        <div className="p-4 border-t">
                                            <div className="flex justify-around">
                                            <div className="text-center">
                                                <h6>Fecha de inicio</h6>
                                                <h6>{format(new Date(cohortData?.startDate?cohortData.startDate:"1998-01-01"), "dd-mm-yy") }</h6>
                                            </div>
                                            <div className="text-center">
                                                <h6>Registros</h6>
                                                <h6>{cohortData?.registration?(<button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'  onClick={handleShowRegistration}>Ver registros</button>): "Sin registros"}</h6>
                                            </div>
                                            <div className="text-center">
                                                <h6>Gastos</h6>
                                                <h6>{cohortData?.expense?(<button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleShowExpense}>Ver gastos</button>):"Sin registro de gastos"}</h6>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="w-full p-2">                    
                                        {
                                            ShowRegistration&&(
                                                <div className='w-full p-2'>
                                                    <div className='bg-white border rounded shadow-md p-4'> 
                                                        
                                                        {cohortData?.registration?.map((registration,index) => (  
                                                            <ReistrationCard key={"index-"+index+" "+"card-"+`${registration.id}`} registration={registration} amount={Amount} />

                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="w-full p-2">
                                        <>
                                            <div className="flex justify-middle">
                                                <button className="btn text-blue-500 hover:underline grid gap-4">
                                                    <Link href={{
                                                                pathname: "/financial-module/expense/",
                                                                query: { id: cohortData?.id?cohortData.id:"" },
                                                    }}
                                                            
                                                    >
                                                        Crear Gasto
                                                    </Link>
                                                </button>
                                            </div> 
                                            {
                                                ShowExpense&&(
                                                    <div className='w-full p-2'>
                                                        <div className='bg-white border rounded shadow-md p-4'>
                                                            {cohortData?.expense?.map((expense) => (
                                                                <ExpenseCard key={expense.id} expense={expense} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                            }  

                                        </>          
                                    </div>
                                            
                                </div>
                            )}
                    </>
                )
            }
        </>
    );
};

export default cohortComponent;
