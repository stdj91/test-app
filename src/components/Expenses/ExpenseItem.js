import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)

   

    return(
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div  className="expense-item_description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">{props.amount}</div>
            <button>Change title</button>
        </Card>
        </li>
    )
}

export default ExpenseItem;