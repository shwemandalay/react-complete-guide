
import React, {useInsertionEffect, useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //const [title, setTitle] = useState('');
    //const [amount, setAmount] = useState('');
    //const [date, setDate] = useState('');

    const [userInput, setUserInput ] = useState({
        title:"",
        amount:"",
        date:""
    });

    const titleChangedHandler = (event) => {
        //setTitle(event.target.value);
        // setUserInput({            
        //     ...userInput,
        //     title:event.target.value
        // });

        setUserInput((prevState) => {
            return {...prevState, title:event.target.value};
        });
    };
    
    const amountChangedHandler = (event) => {
        //setTitle(event.target.value);
        // setUserInput({            
        //     ...userInput,
        //     amount:event.target.value
        // });

        setUserInput((prevState) => {
            return {...prevState, amount:event.target.value};
        });
    };
    const dateChangedHandler = (event) => {
        //setTitle(event.target.value);
        // setUserInput({            
        //     ...userInput,
        //     date:event.target.value
        // });

        setUserInput((prevState) => {
            return {...prevState, date:event.target.value};
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title:userInput.title,
            amount: +userInput.amount,
            date: new Date(userInput.date)
        };

        //console.log(expenseData);
        props.onSaveExpenseDate(expenseData);

        setUserInput({
            title:'',
            amount:'',
            date:''
        });
    }; 
    
    const showExpenseClickHandler = () => {
        setExpenseForm(1);
    };

    const cancelClickHandler = () => { 
        setExpenseForm(0);
    };

    const [isShow, setExpenseForm] = useState(0);
    let expenseForm = <div><button type='button' onClick={showExpenseClickHandler} >Add Expense</button></div>; 
    let expenseFormShow = <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={userInput.title} onChange={titleChangedHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={userInput.amount} min='0.01' step="0.01" onChange={amountChangedHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={userInput.date} min='2019-01-01' step="2023-01-01" onChange={dateChangedHandler}></input>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={cancelClickHandler} >Cancel</button>
                <button type="submit">Add</button>
            </div>
        </div>
    </form>;
    if(isShow === 1){
        expenseForm =  expenseFormShow;        
    } 
    return (        
        <div>{expenseForm}</div>
    );
};

export default ExpenseForm;