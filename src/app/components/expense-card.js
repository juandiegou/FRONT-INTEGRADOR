"use-client";
import Loader from "./loader";

const ExpenseCard = ({expense}) => {
    if(expense === undefined) return (<Loader />);
    return (
        <>
            {
                expense&&(
                    <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                        <div className="bg-white border rounded shadow-md">
                            <div className="flex justify-between border-b p-2">
                                <div className="flex justify-start">
                                    <p className="font-bold text-gray-700">Gasto #{expense.id}</p>
                                </div>
                            </div>
                        </div>
                       <div className="p-4">
                            <div className="grid gap-x-1 gap-y-4 grid-cols-3">
                                <div className="w-1/3 md:w-4/5 lg:w-3/4 ml-4">
                                   Valor: $ <p className="text-gray-700">{expense.total?expense.total:"Sin total"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ExpenseCard;
