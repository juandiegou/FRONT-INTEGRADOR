"use-client";
import React, { useState, useEffect } from "react";
import makeRequest from '../api/request';
import Loader from "./loader";
import Header from "./header";
import { Phone } from "@mui/icons-material";


const CreateStudent = ({onClose}) => {
    const [studentData, setStudentData ] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("studentData", studentData);
        const req = {
            "id": studentData.id,
            "name": studentData.name,
            "document": studentData.document,
            "email": studentData.email,
            "phone": studentData.phone,
            "address": studentData.address,
            "code": studentData.code,
        }
        
        makeRequest.post(`Student`,req).then((result) => {
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
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto mt-8 p-4 w-6/12 bg-white rounded shadow-xl"
                >
                    <div className="form-group">
                        <label htmlFor="name"> Student Name</label>
                        <input
                            type="text"
                            className="form-control block w-full mt-1 p-2 border border-gray-300 rounded-md form-control"
                            id="name"
                            name="name"
                            placeholder="Enter Student Name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="document">Document</label>
                        <input
                            type="text"
                            name="document"
                            className="form-control block w-full mt-1 p-2 border border-gray-300 rounded-md form-control"
                            id="document"
                            placeholder="Enter student document"
                            onChange={handleChange}
                        />

                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Estudent email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control block w-full mt-1 p-2 border border-gray-300 rounded-md form-control"
                            id="email"
                            placeholder="Enter Student Email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Student phone</label>
                        <input
                            type="phone"
                            className="form-control block w-full mt-1 p-2 border border-gray-300 rounded-md form-control"
                            id="phone"
                            name="phone"
                            placeholder="Enter Student phone"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Stundent address</label>
                        <input
                            type="address"
                            name="address"
                            className="form-control block w-full mt-1 p-2 border border-gray-300 rounded-md form-control"
                            id="address"
                            placeholder="Enter Student address"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">Student code</label>
                        <input
                            type="text"
                            name="code"
                            className="form-control block w-full mt-1 p-2 border border-gray-300 rounded-md form-control"
                            id="code"
                            placeholder="Enter Student code"
                            onChange={handleChange}
                        />
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


export default CreateStudent;