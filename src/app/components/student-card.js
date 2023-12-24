import { redirect } from "next/dist/server/api-utils";
import Loader from "./loader";
import Link from "next/link";

const StudentCard = ({student}) => {
    if(student === undefined) return (<Loader />);
    return (
        <>
            {
                student&&(
                    <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                        <div className="bg-white border rounded shadow-md">
                            <div className="p-4">
                                <div className="flex items-center">
                                    <div className="w-1/3 md:w-1/5 lg:w-1/4">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="w-full rounded-full border" />
                                    </div>
                                    <div className="w-2/3 md:w-4/5 lg:w-3/4 ml-4">
                                        <h5 className="text-xl font-bold">{student.name?student.name:"sin nombre"}</h5>
                                        <h6 className="text-gray-600">Student</h6>
                                        <p className="text-gray-700">{student.email?student.email:"Sin correo"}</p>
                                        <Link href={{
                                                        pathname: `/student-management/${student.id}`
                                                    }}
                                                    student={student}
                                                    key={"student-link-"+`${student.id}`}
                                                className="text-blue-500 hover:underline grid gap-4 grid-cols-2"
                                        >
                                            Ver perfil
                                        </Link>

                                    
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        
        </>
    )
}

export default StudentCard;
