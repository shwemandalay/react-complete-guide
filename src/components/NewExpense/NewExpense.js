import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
};

export default NewExpense;