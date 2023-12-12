"use client";
import Loader from "./loader";
import StudentCard from "./student-card";

const RegistratonCard = ({registration}) => {
    if(registration === undefined) return (<Loader />);
    return (
        <>
            {
                registration&&(
                    <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                        <div className="bg-white border rounded shadow-md">
                            <div className="flex justify-between border-b p-2">
                                <div className="flex justify-start">
                                    <p className="font-bold text-gray-700">Registro #{registration.id}</p>
                                </div>
                            </div>
                        </div>
                       <div className="p-4">
                            <div className="grid gap-x-1 gap-y-4 grid-cols-3">
                                <div className="w-1/3 md:w-4/5 lg:w-3/4 ml-4">
                                    <p className="text-gray-700">{registration.amount?registration.amount:"Sin valores"}</p>
                                </div>
                                <div className="w-1/3 md:w-4/5 lg:w-3/4 ml-4">
                                    {
                                        registration?.student&&(
                                            <div className="w-1/2 md:w-1/5 lg:w-1/4">
                                                <div className="flex justify-center">
                                                    <StudentCard student={registration.student} />
                                                </div>  
                                            </div>

                                        )

                                    }
                                </div>
                                <div className="w-1/3 md:w-4/5 lg:w-3/4 ml-4">
                                    {
                                        registration?.student?.discount?.map((discount) => (
                                            <div className="flex justify-right  ">
                                                Descuento:
                                                <p className="text-gray-700">{discount.cost?discount.cost:"Sin valores"}</p>
                                            </div>
                                        ))

                                    }
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div>
                                {
                                    registration?.subject?.map((subject) => (
                                       <>
                                            <div className="flex justify-right">
                                                Materia:
                                                <p className="text-gray-700">{subject.name?subject.name:"Sin valores"}</p>
                                            </div>
                                            <div className="flex justify-right  ">
                                                Modalidad:
                                                <p className="text-gray-700">{subject?.modality==0?"presencial":"virtual"}</p>
                                            </div>
                                            <div className="flex justify-right  ">
                                                Profesor:
                                                <p className="text-gray-700">{subject?.teacher?.name?subject.teacher.name:"No asigmado"}</p>
                                            </div>
                                       </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        
        </>
    )
}

export default RegistratonCard;
