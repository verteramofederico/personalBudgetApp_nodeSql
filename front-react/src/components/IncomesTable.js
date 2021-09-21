import {React, useState, useEffect} from 'react';
import {Table} from 'react-bootstrap/';
import './IncomesExpenses.css'
import IncomeItem from './IncomeItem'

function IncomesTable() {
    const [incomesApi, setIncomesApi] = useState ([])

    useEffect(() => {
        fetch("http://localhost:3001/api/")
        .then((response) => response.json())
        .then((data) => {
            setIncomesApi(data.incomes.incomes)})
        }, []);

    return (
    <section className="table">
        <h3>Incomes</h3>
        <div className="">
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
            incomesApi.length > 0 ? (
                incomesApi.map( (row, i) => {
                return <IncomeItem key={i} income={row} />
            }))
            : (
                null
            )

            }
        </tbody>
        </Table>
        </div>

    </section>
    );
}

export default IncomesTable;