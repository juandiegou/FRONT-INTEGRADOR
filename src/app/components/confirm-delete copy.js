"use-client";
import { AiFillDelete, Ai } from "react-icons/ai";
import Header from "./header";

const ConfirmDelete = ({ onDelete, onCancel, type }) => {
    return (
        <div className="container w-full">
            <Header />
            <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">Confirm Delete</h1>
                </div>
                <div className="mt-4 ">
                    <div className="flex justify-between items-center">
                        <p>Are you sure you want to delete this {type}?</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded-md">
                            Delete
                        </button>
                        <button onClick={onCancel} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Cancel
                        </button>
                    </div>
                </div>
                    
            </div>
           
        </div>
    );
}
export default ConfirmDelete;
