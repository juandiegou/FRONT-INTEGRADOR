import { format } from 'date-fns';
import Link from "next/link";


const FinanceCard = ({cohort}) => {
    if(cohort === undefined) return (<Loader />);
    return (
        <>
            {
                cohort&&(
                    <div className=" w-full md:w-1/2 lg:w-1/3 p-2">

                            <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <div className="w-1/3 md:w-1/4">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="w-full rounded-full border" />
                                        </div>
                                        <div className="w-2/3 md:w-3/4 ml-4">
                                            <h5 className="text-xl font-bold">Cohorte {cohort.id}</h5>
                                            <p className="text-gray-700">{cohort.agreement?"Con convenio":"Sin Convenio"}</p>
                                            <Link href={{
                                                        pathname: `/financial-module/${cohort.id}`
                                                    }}
                                                    cohort={cohort}
                                                    key={cohort.id}
                                                className="text-blue-500 hover:underline grid gap-4 grid-cols-2"
                                        >
                                            Ver más
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-t">
                                    <div className="flex justify-around">
                                        <div className="text-center">
                                            <h6>Periodos</h6>
                                            <h6>{cohort.periods}</h6>
                                        </div>
                                        <div className="text-center">
                                            <h6>Fecha de inicio</h6>
                                            <h6>{format(new Date(cohort.startDate), "dd-mm-yy") }</h6>
                                        </div>
                                        <div className="text-center">
                                            <h6>Modalidad</h6>
                                            <h6>{cohort.modality==0?"Presencial":"Virtual"}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                )
            }
        </>
    );
}

export default FinanceCard;