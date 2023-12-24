import React, { useState } from "react";
import Header from './header';
import makeRequest from '../api/request';
import { Router } from "next/router";


const EditStudentForm = ({ student, onSave, changeEdit }) => {
  const [editedStudent, setEditedStudent] = useState({ ...student });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const req = {
      "id": editedStudent.id,
      "name": editedStudent.name,
      "document": editedStudent.document,
      "email": editedStudent.email,
      "phone": editedStudent.phone,
      "address": editedStudent.address,
      "code": editedStudent.code,
      "discount": editedStudent.discount,
    }

    if(editedStudent.discount == undefined) {
      req["discount"]= [
        {
          "id": 0,
          "percentage": 0,
          "cost": 0,
          "type": "null"
        }
      ]
    }


    // makeRequest('put', `Student/${student.id}`,).then((result) => {
    //   console.log("results", result);
    // })
    makeRequest.put(`Student/${student.id}`,req).then((result) => {
        console.log("results", result);
      }
    ).catch((error) => {

        console.error('Error al obtener datos de la API:', error.message);
    });



    onSave(editedStudent);
  };

  return (
    <div className="container w-full">
      <Header />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-md">
      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={editedStudent.name}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </label>
      <label className="block mb-2">
        Teléfono:
        <input
          type="number"
          name="phone"
          value={editedStudent.phone} 
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </label>
      <label className="block mb-2">
        Email:
        <input
          type="text"
          name="email"
          value={editedStudent.email}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </label>
      <label className="block mb-2">
        Dirección:
        <input
          type="text"
          name="address"
          value={editedStudent.address}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </label>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Save Changes
      </button>
      <button
        type="button"
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800"
        onClick={changeEdit}
      >
        Cancel
      </button>
      </form>
    </div>
  );
};

export default EditStudentForm;
