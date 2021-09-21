import {React, useState, useEffect} from 'react';
import {Table} from 'react-bootstrap/';
import './IncomesExpenses.css'
import ExpenseItem from './ExpenseItem'

function ExpensesTable() {
    const [expensesApi, setExpensesApi] = useState ([])

    useEffect(() => {
        fetch("http://localhost:3001/api/")
        .then((response) => response.json())
        .then((data) => {
            setExpensesApi(data.expenses.expenses)})
        }, []);

    return (
    <section className="table">
        <h3>Expenses</h3>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Concept</th>
            <th>Amount</th>
            <th className="dateTable">Date</th>
            <th>Modify</th>
            </tr>
        </thead>
        <tfoot className="bottonTable">
            <tr>
            <th>#</th>
            <th>Concept</th>
            <th>Amount</th>
            <th className="dateTable">Date</th>
            <th>Modify</th>
            </tr>
        </tfoot>
        <tbody>
            {
            expensesApi.length > 0 ? (
                expensesApi.map( (row, i) => {
                return <ExpenseItem key={i} expense={row} />
            }))
            : (
                null
            )

            }
        </tbody>
        </Table>

    </section>
    );
}

export default ExpensesTable;