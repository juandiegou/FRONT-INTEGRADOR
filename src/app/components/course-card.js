import Loader from "./loader";
import Link from "next/link";
const CourseCard = ({ course }) => {
    if(course === undefined) return (<Loader />);
    return (
        <>
            {
                course&&(
                    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                        <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="p-4">
                                <div className="flex items-center">
                                    <div className="w-2/3 md:w-3/4 ml-4">
                                        <h5 className="text-xl font-bold">{course.name}</h5>
                                        <h6 className="text-gray-600">{course.modality}</h6>
                                        <p className="text-gray-700">{course.teacher?.name?course.teacher.name:"Sin Profesor asignado"}</p>
                                        <Link href={{
                                                        pathname: `/course-management/${course.id}`
                                                    }}
                                                    course={course}
                                                    className="text-blue-500 hover:underline"
                                        >
                                            Ver detalles
                                        </Link>
                                    </div>
                                </div>
                            </div>
                   
                        </div>
                    </div>

                )
            
            }
        </>
       
    );
};

export default CourseCard;