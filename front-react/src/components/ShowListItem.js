import {React, useState, useEffect} from 'react';
import {Table} from 'react-bootstrap/';
import './IncomesExpenses.css'
import OrderedItem from "./OrderedItem"

function ShowListItem(props) {
    const [expensesApi, setExpensesApi] = useState ([])
    const [incomesApi, setIncomesApi] = useState ([])

    useEffect(() => {
        fetch("http://localhost:3001/api/")
        .then((response) => response.json())
        .then((data) => {
            setExpensesApi(data.expenses.expenses)})
        }, []);
    
    useEffect(() => {
        fetch("http://localhost:3001/api/")
        .then((response) => response.json())
        .then((data) => {
            setIncomesApi(data.incomes.incomes)})
            }, []);
    
    let listAll = [...expensesApi, ...incomesApi] 

    let listAllInOrder = listAll.sort(function (a, b){
        if ( a.date > b.date )
        return -1;
        if ( a.date < b.date )
        return 1;
        return 0;
    })

    return (
    <section className="table">
        <section className="table">
        {props.option === 0 ? (<h3>Last 10</h3>) : null }
        {props.option === 1 ? (<h3>Incomes</h3>) : null }
        {props.option === 2 ? (<h3>Expenses</h3>) : null }
        <div className="">
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Type</th>
            <th>Concept</th>
            <th>Amount</th>
            <th>Category</th>
            <th className="dateTable">Date</th>
            <th>Modify</th>
            </tr>
        </thead>
        <tfoot className="bottonTable">
            <tr>
            <th>#</th>
            <th>Type</th>
            <th>Concept</th>
            <th>Amount</th>
            <th>Category</th>
            <th className="dateTable">Date</th>
            <th>Modify</th>
            </tr>
        </tfoot>
        <tbody>
            {props.option === 0 && listAllInOrder.length > 0 ? (
                listAllInOrder.map( (row, i) => {
                    return <OrderedItem key={i} item={row} />
                })
            ) : null } 
            {props.option === 1 && incomesApi.length > 0  ? (
                incomesApi.map( (row, i) => {
                    return <OrderedItem key={i} item={row} />
                })
            ) : null } 
            {props.option === 2 && expensesApi.length > 0 ? (
                expensesApi.map( (row, i) => {
                    return <OrderedItem key={i} item={row} />
                })
            ): null } 
        </tbody>
        </Table>
        </div>

    </section>
    </section>
    );
}

export default ShowListItem;