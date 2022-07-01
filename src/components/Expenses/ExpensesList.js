
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
 
    if(props.expenses.length === 0){
        return (<h2 className="expenses-list__fallback">Record No Found.</h2>);
    }

    return(<ul className="expenses-list">
            {props.expenses.map((x) => (<ExpenseItem key={x.id} title={x.title} date={x.date} amount={x.amount}></ExpenseItem>))};
        </ul>);

}

export default ExpensesList;