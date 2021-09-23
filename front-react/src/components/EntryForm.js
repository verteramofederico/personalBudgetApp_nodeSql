import {React, useState} from 'react';
import {Button} from 'react-bootstrap';
import IncomeForm from "./IncomeForm"
import ExpenseForm from "./ExpenseForm"
import "./EntryForm.css"

function EntryForm() {

    const [select, setSelect] = useState (0)

        function selectIncomeAdd(e) {
            e.preventDefault();
            if (select !== 1) {setSelect(1)} 
            else {setSelect(0) } 
            
        }
        function selectExpenseAdd(e) {
            e.preventDefault();
            if (select !== 2) {setSelect(2)} 
            else {setSelect(0) }         
        }     

    return (
    <>
        <section className="selectForm">
            {select !== 2 ? (
            <form onSubmit={selectIncomeAdd}>
            <Button type="submit" variant="outline-secondary"> Add Income </Button>
            </form>
            ) : null}

            {select !== 1 ? (
            <form onSubmit={selectExpenseAdd}>
            <Button type="submit" variant="outline-secondary"> Add Expense </Button>
            </form>
            ) : null}       
        </section>

        {select === 1 ? (<IncomeForm />) : null}
        {select === 2 ? (<ExpenseForm />) : null}

    </>
    );
}

export default EntryForm;