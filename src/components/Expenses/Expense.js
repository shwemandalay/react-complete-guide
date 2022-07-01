import React,{ useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expense.css';

const Expense = (props)  => {  

    const [filter, setFilter] =  useState(''); 
    const onFilterChangedHandler = (newFilter) => {
        setFilter(newFilter);
    };

    const filteredExpenses = props.expenses.filter(x => x.date.getFullYear().toString() === filter);

    return (
        <Card className="expense">
        <ExpensesFilter selected={filter} onFilterChanged={onFilterChangedHandler}></ExpensesFilter>  
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList expenses={filteredExpenses}></ExpensesList>
        </Card>
    );
}

export default Expense;