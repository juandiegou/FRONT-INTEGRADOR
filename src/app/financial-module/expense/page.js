"use client";
import React, { useEffect, useState } from "react";
import makeRequest from '../../api/request';
import Loader from "../../components/loader";
import Header from "../../components/header";
import expenses from "../../components/expense-types";
import Link from "next/link";



const CreateExpense = ( {searchParams} ) => {
    const [expenseData, setExpenseData] = useState(null);
    const [expenseType, setExpenseType] = useState(null);
    const [cohortData, setcohortData] = useState(null);
    const [createdExpense, setCreatedExpense] = useState(null);

    useEffect(()=> {
        makeRequest.get(`Cohort/${searchParams.id}`).then((result) => {
            setcohortData(result.data);
            console.log("results", result);
            }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        });
    }, [searchParams]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpenseData((prev) => ({ ...prev, [name]: value }));

    };


    const handleChangeExpenseType = (e) => {
        const name = e.target.value;
        setExpenseData((prev) => ({ ...prev, ["url"]: name }));
        setExpenseType(name);
    };

    const  handleSaveExpense = (e) => {
        e.preventDefault();
        console.log("expenseData",expenseData);
        const url = expenseData.url;
        makeRequest.post(url, expenseData).then(async (result) => {
            setCreatedExpense(result.data);
            }
        ).catch((error) => {
            console.error('Error al obtener datos de la API:', error.message);
        }).then(() => {
            const req = {
                "id": createdExpense.id+1,
                "total": Number(createdExpense.total),
            }
            cohortData.expense.push(req);
            makeRequest.put(`Cohort/${searchParams.id}`, cohortData).then((result) => {
                console.log("results", result);
                }
            ).catch((error) => {
                console.error('Error al obtener datos de la API:', error.message);
            }
            );
        }
        ).then(() => {
            window.location.href = `/financial-module/${searchParams.id}`;
        }
        );
        
        
    };

    return (
        <>
            <Header />
            <div className="container w-full">
                <div className="max-w-md mx-auto mt-8 p-4">
                    <form onSubmit={handleSaveExpense} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-md">
                        <label className="block mb-2">
                            <span className="text-gray-700">Expense Type</span>
                            <select
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                onChange={handleChangeExpenseType}
                                placeholder="Select Expense Type"
                                name="expenseType"
                                defaultValue={expenseType?expenseType:""}
                            >
                                <option value="" selected disabled>Select Expense Type</option>
                                {expenses.map((expense) => (
                                    <option key={expense.name} value={expense.name} onChange={handleChange} onSelect={handleChange}>
                                        {expense.conventionalName}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label className="block mb-2">
                            <span className="text-gray-700">Expense Name</span>
                            <input
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                type="text"
                                placeholder="Enter Expense Name"
                                name="expenseName"
                            />
                        </label>
                        <label className="block mb-2">
                            <span className="text-gray-700">Expense Amount</span>
                            <input
                                type="number"
                                min={0}
                                placeholder="Enter Expense Amount"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                name="expenseAmount"
                                onChange={handleChange}
                            />
                        </label>
                        <>
                            {
                                expenseType === "FixedExpense"?(
                                    <>
                                        {
                                            expenses.find(expense => expense.name === "FixedExpense")?.data && (
                                                <>
                                                    {Object.values(expenses.find(expense => expense.name === "FixedExpense").data).map((expense) => (
                                                        <div key={expense.name}>
                                                        <label className="block mb-2">
                                                            <span className="text-gray-700">{expense.name}</span>
                                                            <input
                                                                placeholder={`Enter ${expense.name}`}
                                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                                                name={expense.name}
                                                                type={expense.type}
                                                                onChange={handleChange}
                                                            />
                                                        </label>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                        }
                                    </>
                                )
                                :expenseType === "GeneralExpense"?(
                                    <>
                                        {
                                            expenses.find(expense => expense.name === "GeneralExpense")?.data && (
                                                <>
                                                    {Object.values(expenses.find(expense => expense.name === "GeneralExpense").data).map((expense) => (
                                                        <div key={expense.name}>
                                                        <label className="block mb-2">
                                                            <span className="text-gray-700">{expense.name}</span>
                                                            <input
                                                                placeholder={`Enter ${expense.name}`}
                                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                                                name={expense.name}
                                                                type={expense.type}
                                                                onChange={handleChange}
                                                            />
                                                        </label>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                        }
                                    </>
                                )
                                :expenseType === "InvestmentExpense"?(
                                    <>
                                        {
                                            expenses.find(expense => expense.name === "InvestmentExpense")?.data && (
                                                <>
                                                    {Object.values(expenses.find(expense => expense.name === "InvestmentExpense").data).map((expense) => (
                                                        <div key={expense.name}>
                                                        <label className="block mb-2">
                                                            <span className="text-gray-700">{expense.name}</span>
                                                            <input
                                                                placeholder={`Enter ${expense.name}`}
                                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                                                name={expense.name}
                                                                type={expense.type}
                                                                onChange={handleChange}
                                                            />
                                                        </label>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                        }
                                    </>
                                )
                                :expenseType === "VariableExpense"?(
                                    <>
                                        {
                                            expenses.find(expense => expense.name === "VariableExpense")?.data && (
                                                <>
                                                    {Object.values(expenses.find(expense => expense.name === "VariableExpense").data).map((expense) => (
                                                        <div key={expense.name}>
                                                        <label className="block mb-2">
                                                            <span className="text-gray-700">{expense.name}</span>
                                                            <input
                                                                placeholder={`Enter ${expense.name}`}
                                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                                                name={expense.name}
                                                                type={expense.type}
                                                                onChange={handleChange}
                                                            />
                                                        </label>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                        }
                                     </>
                                ):expenseType === "OtherExpense"?(
                                    <>
                                        {
                                            expenses.find(expense => expense.name === "OtherExpense")?.data && (
                                                <>
                                                    {Object.values(expenses.find(expense => expense.name === "OtherExpense").data).map((expense) => (
                                                        <div key={expense.name}>
                                                        <label className="block mb-2">
                                                            <span className="text-gray-700">{expense.name}</span>
                                                            <input
                                                                placeholder={`Enter ${expense.name}`}
                                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                                                name={expense.name}
                                                                type={expense.type}
                                                                onChange={handleChange}
                                                            />
                                                        </label>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                        }
                                     </>
                                    
                                ):expenseType === "OtherExpenseNonTeachingStaff"?(
                                    <>
                                        {
                                            expenses.find(expense => expense.name === "OtherExpenseNonTeachingStaff")?.data && (
                                                <>
                                                    {Object.values(expenses.find(expense => expense.name === "OtherExpenseNonTeachingStaff").data).map((expense) => (
                                                        <div key={expense.name}>
                                                        <label className="block mb-2">
                                                            <span className="text-gray-700">{expense.name}</span>
                                                            <input
                                                                placeholder={`Enter ${expense.name}`}
                                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                                                name={expense.name}
                                                                type={expense.type}
                                                                onChange={handleChange}
                                                            />
                                                        </label>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                        }
                                    </>

                                ):expenseType === "OtherExpenseTeachingStaff"?(
                                    <>
                                        {
                                            expenses.find(expense => expense.name === "FixedExpense")?.data && (
                                                <>
                                                    {Object.values(expenses.find(expense => expense.name === "FixedExpense").data).map((expense) => (
                                                        <div key={expense.name}>
                                                        <label className="block mb-2">
                                                            <span className="text-gray-700">{expense.name}</span>
                                                            <input
                                                                placeholder={`Enter ${expense.name}`}
                                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                                                name={expense.name}
                                                                type={expense.type}
                                                                onChange={handleChange}
                                                            />
                                                        </label>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                        }
                                     </>
                                ):expenseType === "RecurrentCost"?(
                                    <>
                                        {
                                            expenses.find(expense => expense.name === "RecurrentCost")?.data && (
                                                <>
                                                    {Object.values(expenses.find(expense => expense.name === "RecurrentCost").data).map((expense) => (
                                                        <div key={expense.name}>
                                                        <label className="block mb-2">
                                                            <span className="text-gray-700">{expense.name}</span>
                                                            <input
                                                                placeholder={`Enter ${expense.name}`}
                                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                                                name={expense.name}
                                                                type={expense.type}
                                                                onChange={handleChange}
                                                            />
                                                        </label>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                        }
                                    </>
                                
                                ):expenseType === "ServiceExpense"?(
                                    <>
                                        {
                                            expenses.find(expense => expense.name === "ServiceExpense")?.data && (
                                                <>
                                                    {Object.values(expenses.find(expense => expense.name === "ServiceExpense").data).map((expense) => (
                                                        <div key={expense.name}>
                                                        <label className="block mb-2">
                                                            <span className="text-gray-700">{expense.name}</span>
                                                            <input
                                                                placeholder={`Enter ${expense.name}`}
                                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                                                name={expense.name}
                                                                type={expense.type}
                                                                onChange={handleChange}
                                                            />
                                                        </label>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                        }
                                    </>
                                
                                ):expenseType === "SpecialExpense"?(
                                    <>
                                        {
                                            expenses.find(expense => expense.name === "FixedExpense")?.data && (
                                                <>
                                                    {Object.values(expenses.find(expense => expense.name === "FixedExpense").data).map((expense) => (
                                                        <div key={expense.name}>
                                                        <label className="block mb-2">
                                                            <span className="text-gray-700">{expense.name}</span>
                                                            <input
                                                                placeholder={`Enter ${expense.name}`}
                                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                                                name={expense.name}
                                                                type={expense.type}
                                                                onChange={handleChange}
                                                            />
                                                        </label>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                    }
                                     </>
                                ):expenseType === "TransferExpense"?(

                                    <>
                                        {
                                            expenses.find(expense => expense.name === "TransferExpense")?.data && (
                                                <>
                                                    {Object.values(expenses.find(expense => expense.name === "TransferExpense").data).map((expense) => (
                                                        <div key={expense.name}>
                                                        <label className="block mb-2">
                                                            <span className="text-gray-700">{expense.name}</span>
                                                            <input
                                                                placeholder={`Enter ${expense.name}`}
                                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                                                name={expense.name}
                                                                type={expense.type}
                                                                onChange={handleChange}
                                                            />
                                                        </label>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                        }
                                    </>
                                ):expenseType === "TravelExpense"?(
                                    <>
                                        {
                                            expenses.find(expense => expense.name === "TravelExpense")?.data && (
                                                <>
                                                    {Object.values(expenses.find(expense => expense.name === "TravelExpense").data).map((expense) => (
                                                        <div key={expense.name}>
                                                        <label className="block mb-2">
                                                            <span className="text-gray-700">{expense.name}</span>
                                                            <input
                                                                placeholder={`Enter ${expense.name}`}
                                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                                                                name={expense.name}
                                                                type={expense.type}
                                                                onChange={handleChange}
                                                            />
                                                        </label>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                        }
                                    </>
                                ):null


                            }
                        </>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleSaveExpense}
                        >
                           Crear Gasto
                        </button>
                        <button 
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            <Link href={"/financial-module/"}>
                                Cancelar
                            </Link>
                        </button>

                    </form>
                </div>
            </div>
           
        </>
    );
}


export default CreateExpense;
