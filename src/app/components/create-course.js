"use-client";
import React, { useState, useEffect } from "react";
import makeRequest from '../api/request';
import Loader from "./loader";
import Header from "./header";
import { on } from "events";


const createCourse = ({onClose}) => {
    const [courseData, setCourseData] = useState(null);
    const [teacher, setTeacher] = useState(null);

    useEffect(() => {
        makeRequest.get(`Teacher`).then((result) => {
            setTeacher(result.data);
            console.log("results", result);
          }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        })
      }, []);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("courseData", courseData);
        const selectedTeacher = teacher.find((teacher) => teacher.id === Number(courseData.teacher));
        console.log("selectedTeacher", selectedTeacher);
        const req = {
            "id": courseData.id,
            "name": courseData.name,
            "modality": Number(courseData.modality?courseData.modality:0),
            "teacher": {
              "name": selectedTeacher.name?selectedTeacher.name:"",
              "leader": {
                "name": selectedTeacher.leader.name?selectedTeacher.leader.name:"",
                "type": selectedTeacher.leader.type?selectedTeacher.leader.type:"",
                }
            }
    
        }
        
        makeRequest.post(`Subject`,req).then((result) => {
            console.log("results", result);
            
          }
        ).catch((error) => {
              
                console.error('Error al obtener datos de la API:', error.message);
            } 
        ).finally(() => {
            onClose();
        });
    }

    return (
        <>
            <Header />
            <div className="container w-full">
                <form
                    className="max-w-md mx-auto mt-8 p-4 w-6/12 bg-white rounded shadow-xl"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="name"> Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Subject Name"
                            className="form-control block w-full mt-1 p-2 border border-gray-300 rounded-md"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Modalidad</label>
                        <select
                            className="form-control block w-full mt-1 p-2 border border-gray-300 rounded-md"
                            name="modality"
                            onChange={handleChange}

                        >
                            <option selected disabled>Seleccione una modalidad</option>
                            <option value={0}>Presencial</option>
                            <option value={1}>Virtual</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">
                            profesor:
                        </label>
                        <input list="teacher" name="teacher" id="teachers" className="block w-full border border-gray-300 rounded-md" onChange={handleChange} />
                            <datalist id="teacher">
                                {teacher && teacher.map((teacher) => (
                                    <option key={teacher.id} value={teacher.id} onChange={handleChange}>{teacher.name}</option>
                                ))}
                            </datalist>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                       
                    >
                        Save
                    </button>
                </form>
            </div>
        </>
    );
}


export default createCourse;