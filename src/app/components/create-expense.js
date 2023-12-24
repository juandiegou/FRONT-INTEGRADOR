"use-client";
import React, { useState, useEffect } from "react";
import makeRequest from '../api/request';
import Loader from "./loader";
import Header from "./header";
import expenses from "./expense-types";


const CreateExpense = ({onCreate}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [expenseData, setExpenseData] = useState(null);
    const [expenseType, setExpenseType] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpenseData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = (editedExpense) => {
        console.log("Saving changes:", editedExpense);
        
    };



    
    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Create Expense</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="expenseName">Expense Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="expenseName"
                                    placeholder="Enter Expense Name"
                                    value={expenseName}
                                    onChange={(e) => setExpenseName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expenseAmount">Expense Amount</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="expenseAmount"
                                    placeholder="Enter Expense Amount"
                                    value={expenseAmount}
                                    onChange={(e) => setExpenseAmount(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expenseDate">Expense Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="expenseDate"
                                    placeholder="Enter Expense Date"
                                    value={expenseDate}
                                    onChange={(e) => setExpenseDate(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expenseDescription">Expense Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="expenseDescription"
                                    placeholder="Enter Expense Description"
                                    value={expenseDescription}
                                    onChange={(e) => setExpenseDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expenseCategory">Expense Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="expenseCategory"
                                    placeholder="Enter Expense Category"
                                    value={expenseCategory}
                                    onChange={(e) => setExpenseCategory(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expenseType">Expense Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="expenseType"
                                    placeholder="Enter Expense Type"
                                    value={expenseType}
                                    onChange={(e) => setExpenseType(e.target.value)}
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => handleSaveChanges({
                                    expenseName,
                                    expenseAmount,
                                    expenseDate,
                                    expenseDescription,
                                    expenseCategory,
                                    expenseType
                                })}
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}


export default CreateExpense;


