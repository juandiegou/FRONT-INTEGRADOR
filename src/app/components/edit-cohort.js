import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import React, { useState } from "react";
import Header from './header';

const EditCohortForm = ({ student, onSave,changeEdit }) => {
  const [editedStudent, setEditedStudent] = useState({ ...student });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSave function with the edited student data
    onSave(editedStudent);
  };

  return (
    <div className="container w-full">
      <Header />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-md">
      <label className="block mb-2">
        Fecha inicio:
        <input
          type="date"
          name="startDate"
          value={editedStudent.name}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </label>
      <label className="block mb-2">
        Modalidad:
        <input
          type="text"
          name="modality"
          value={editedStudent.email}
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

export default EditCohortForm;
