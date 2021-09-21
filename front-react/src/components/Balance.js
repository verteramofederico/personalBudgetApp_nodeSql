import {React, useState, useEffect} from 'react';
import "./Balance.css"

function Balance() {

    const [expensesApi, setExpensesApi] = useState ([])

    useEffect(() => {
        fetch("http://localhost:3001/api/")
        .then((response) => response.json())
        .then((data) => {
            setExpensesApi(data.expenses.expenses)})
        }, []);

    const [incomesApi, setIncomesApi] = useState ([])

    useEffect(() => {
        fetch("http://localhost:3001/api/")
        .then((response) => response.json())
        .then((data) => {
            setIncomesApi(data.incomes.incomes)})
            }, []);
    
    let totalIncomes = 0
    if (incomesApi.length > 0) {
        incomesApi.forEach((income) => {
            totalIncomes += income.amount;
        })
    }
    let totalExpenses = 0
    if (expensesApi.length > 0) {
        expensesApi.forEach((expense) => {
            totalExpenses += expense.amount;
        })
    }
    
    let balanceAmount = totalIncomes - totalExpenses

    return (
    <section className="balance">
        <h4 className="balanceHeader">Balance:</h4>

        {balanceAmount >= 0 ? (<h5 className="balanceAmount positive">${balanceAmount}</h5>)
        : (<h5 className="balanceAmount negative">${balanceAmount}</h5>)
        }
        
    </section>
    );
}

export default Balance;