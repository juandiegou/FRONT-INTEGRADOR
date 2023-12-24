import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import React, { useState } from "react";
import Header from './header';
import modalities from './modalities.json';
import makeRequest from '../api/request';

const EditCohortForm = ({ cohort, onSave,changeEdit }) => {
  const [editedCohort, setEditedCohort] = useState({ ...cohort });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCohort((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSave function with the edited cohort data
    console.log("editedCohort", editedCohort);
    const req = {
        "id": editedCohort.id,
        "startDate": editedCohort.startDate,
        "modality": Number(editedCohort.modality),
        "agreement": editedCohort.agreement,
        "expense": editedCohort.expense,
        "registration": editedCohort.registration,
        "subject": editedCohort.subject,
        "periods": Number(editedCohort.periods),
    }

    makeRequest.put(`Cohort/${cohort.id}`, req ).then((result) => {
        console.log("results", result);
      }
    ).catch((error) => {
        console.error('Error al obtener datos de la API:', error.message);
    });

    onSave(editedCohort);
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
          value={editedCohort.name}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </label>
      <label className="block mb-2">
        Periodos:
        <input
          type="number"
          name="periods"
          value={editedCohort.periods}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md" 
          step={1}
          min={1}
          max={10}
        />
      </label>

      <label className="block mb-2">
        Modalidad:
        <input list="modality" name="modality" id="modalities" className="block w-full border border-gray-300 rounded-md" onChange={handleChange} />
            <datalist id="modality">
                {modalities && modalities.map((modality) => (
                    <option key={modality.value} value={modality.value} onChange={handleChange} >{modality.name}</option>
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
