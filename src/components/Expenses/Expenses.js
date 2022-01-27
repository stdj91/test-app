import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
    })

    return(
      <div>
        <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
        {filteredExpenses.length === 0 ? <p>There is no expenses...</p> : 
          filteredExpenses.map((expense) => {
          return (
            <ExpenseItem 
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            /> 
          )
        })}
        <ExpensesChart expenses={filteredExpenses}/>
        </Card>
      </div>
    )
}

export default  Expenses;