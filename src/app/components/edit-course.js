import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import React, { useState, useEffect } from "react";
import makeRequest from '../api/request';
import Header from './header';

const EditCohortForm = ({ course, onSave, changeEdit }) => {
  const [editedcourse, setEditedcourse] = useState({ ...course });
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    // makeRequest('get', `Teacher`).then((result) => {
    //     setTeacher(result);
    //     console.log("results", result);
    //     })
    makeRequest.get(`Teacher`).then((result) => {
        setTeacher(result.data);
        console.log("results", result);
      }
    ).catch((error) => {
        console.error('Error al obtener datos de la API:', error.message);
    });
    }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedcourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const req = {
        "id": editedcourse.id,
        "name": editedcourse.name,
        "modality": Number(editedcourse.modality  || 0),
        "teacher": teacher[0],
    }

    // makeRequest('put', `Subject/${course.id}`,req).then((result) => {
    //   console.log("results", result);
    // }
    // ).catch((error) => {
        
    //       console.error('Error al obtener datos de la API:', error.message);
    //   }
    // );
    makeRequest.put(`Subject/${course.id}`,req).then((result) => {
        console.log("results", result);
      }
    ).catch((error) => {
          
            console.error('Error al obtener datos de la API:', error.message);
        } 
    );

    // Call the onSave function with the edited course data
    onSave(editedcourse);
  };

  return (
    <div className="container w-full">
      <Header />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-md">
      <label className="block mb-2">
        nombre :
        <input
          type="text"
          name="name"
          value={editedcourse.name}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </label>
      <label className="block mb-2">
        modalidad:
        <input
          type="text"
          name="modality"
          value={editedcourse.email}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </label>
      <label className="block mb-2">
        profesor:
        <input list="teacher" name="teacher" id="teachers" className="block w-full border border-gray-300 rounded-md" onChange={handleChange} />
            <datalist id="teacher">
                {teacher && teacher.map((teacher) => (
                    <option key={teacher.id0} value={teacher.id}>{teacher.name}</option>
                ))}
            </datalist>
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

export default EditCohortForm;
