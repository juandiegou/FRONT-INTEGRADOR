"use client";
import MUIDataTable from "mui-datatables";
import { useState, useEffect } from 'react';
import Header from '../components/header';
import makeRequest  from '../api/request';
import { create } from "domain";

export default function CreateCohort ({onCreate}) {
    const [students, setStudents] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [selectedSubjects, setSelectedSubjects] = useState([]);



    useEffect(() => {
        makeRequest.get('Student').then((result) => {
            setStudents(result.data);
            console.log("results",result);
          }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        }
        )
        .then(() => {
            makeRequest.get('Subject').then((result) => {
                setSubjects(result.data);
                console.log("results subjects",result);
              }
            ).catch((error) => {
                console.error('Error al obtener datos de la API:', error.message);
            }
            )
        });
    }, []);

  const [cohort, setCohort] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(cohort);
    console.log(selectedStudents);
    console.log(selectedSubjects);

    var subjects = [];
    selectedSubjects.map((subject) => {
        subjects.push({
            id: subject.id,
            name: subject.name,
            modality: subject.modality,
            teacher: {
                id: subject.teacher.id,
                name: subject.teacher.name,
                leader:{    
                    id: subject.teacher.leader.id,
                    price: subject.teacher.leader.price,
                    type : subject.teacher.leader.type,
                },
            },
            }
        );
    });

    const data = {
        type: Number(cohort.type) ,
        periods: cohort.periods,
        startDate: cohort.startDate,
        modality: Number(cohort.modality),
        agreement: cohort.agreement,
        "expenses": [
            {
              "id": 0,
              "total": 1000000
            }
          ],
          "registration": [
            {
              "id": 0,
              "amount": 1000000,
              "student": {
                "id": 0,
                "name":  selectedStudents[0].name,
                "document": selectedStudents[0].document,
                "email": selectedStudents[0].email,
                "phone": selectedStudents[0].phone,
                "address": selectedStudents[0].address,
                "code": selectedStudents[0].code,
                "discount": selectedStudents[0].discount,
              },
              subject: [
                    
              ]
            }
          ]

    
    };
    console.log(data);
    makeRequest.post('Cohort', data).then((result) => {
        console.log("results",result);
      }
    ).catch((error) => {
        console.error('Error al obtener datos de la API:', error.message);
    }
    ).then(() => {
        window.location.reload();
        onCreate(false);
    });


  };

    const handleChange = (e) => {
        setCohort((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };


    const handleChangeCheck = (e) => { 
        setCohort((prev) => ({ ...prev, ["agreement"]: e.target.checked?true:false }));
        console.log(cohort);
    };
    const columns = ["id", "name", "document", "email", "phone", "address","code"];
    const options = {
        filterType: 'checkbox',
        onRowSelectionChange: (rowsSelected, allRows,) => {
            console.log(rowsSelected, allRows);
            if(rowsSelected.length > 0){
                rowsSelected.map((row) => {
                    console.log(students[row.dataIndex]);
                    setSelectedStudents((index) => [...index, students[row.dataIndex]]);
                });
            }
        },
        
       selectToolbarPlacement: "none",
        selectedRows: {
            text: "row(s) selected",
          },
        resposive: "scroll",
    };

    const columnsSubjects = ["id", "name", "modality"];
    const optionsSubjects = {
        filterType: 'checkbox',
        onRowSelectionChange: (rowsSelected, allRows,) => {
            console.log(rowsSelected, allRows);
            if(rowsSelected.length > 0){
                rowsSelected.map((row) => {
                    console.log(subjects[row.dataIndex],row.dataIndex);
                    setSelectedSubjects((index) => [...index, subjects[row.dataIndex]]);
                });
            }
        },
        

        
        selectToolbarPlacement: "none",
        selectedRows: {
            text: "row(s) selected",
          },
        resposive: "scroll",
        
    };

  return (

    <>
        <Header />
        <div className="container w-full">
            <form 
                className="max-w-md mx-auto mt-8 p-4 w-6/12 bg-white rounded shadow-xl"
                onSubmit={handleSubmit}
            >
                <div className="grid grid-cols-1 gap-4">
                    <div className="form-group">
                        <label className="block mb-2">Tipo</label>
                        <select 
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                            name="type"
                            onChange={handleChange}
                        >
                            <option selected disabled>Seleccione un tipo</option>
                            <option value={0}>Posgrado</option>
                            <option value={1}>Doctorado</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="block mb-2">Semestres</label>
                        <input 
                            max={10} min={1} type="number" 
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                            name="periods"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="block mb-2">Fecha de inicio</label>
                        <input                                 
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                            type="date"
                            name="startDate"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="block mb-2">Modalidad</label>
                        <select
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                            name="modality"
                            onChange={handleChange}

                        >
                            <option selected disabled>Seleccione una modalidad</option>
                            <option value={0}>Presencial</option>
                            <option value={1}>Virtual</option>
                        </select>
                    </div>
                    <div className="form-group flex flex-wrap p-4">
                        {/* <label className="block mb-1 mr-4">¿Tiene convenio?</label>
                        <input className="block mb-1 p-5 flex flex-wrap" type="radio" name="agreement" onChange={handleChange}  />      */}
                        <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="flexSwitchCheckDefault"
                        >¿Tiene convenio?</label>
                        <input
                        className="
                            mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] 
                            bg-gray-500 before:pointer-events-none before:absolute 
                            before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent 
                            before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] 
                            after:h-5 after:w-5 after:rounded-full after:border-none after:bg-blue-200 
                            after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
                            after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] 
                            checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] 
                            checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full 
                            checked:after:border-none checked:after:bg-primary 
                            checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] 
                            checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] 
                            hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] 
                            focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] 
                            focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] 
                            focus:after:block focus:after:h-5 focus:after:w-5 
                            focus:after:rounded-full focus:after:content-[''] 
                            checked:focus:border-primary checked:focus:bg-primary 
                            checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 
                            checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] 
                            checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                            blue:bg-blue-600 blue:after:bg-blue-400 blue:checked:bg-primary 
                            blue:checked:after:bg-primary blue:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] 
                            blue:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        onChange={handleChangeCheck}
                        
                        
                        />
                    </div>
                </div>
                <>
                    <MUIDataTable
                        title={"Student List"}
                        data={students}
                        columns={columns}
                        options={options}

                    />
                </>
                <>
                    <MUIDataTable
                        title={"Subject List"}
                        data={subjects}
                        columns={columnsSubjects}
                        options={optionsSubjects}
                    />
                </>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                    onClick={handleSubmit}
                >siguiente</button>
            </form>
        </div>
    </>
  );
};
