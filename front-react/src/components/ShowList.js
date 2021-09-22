import {React, useState} from 'react';
import IncomesTable from './IncomesTable'
import ExpensesTable from './ExpensesTable'
import Last10 from './Last10'
import {Button} from 'react-bootstrap';
import  './ShowList.css'

function BodyApp() {

    const [toShow, setToShow] = useState (0)

    function showLast10(e) {
        e.preventDefault();
        if (toShow !== 0) {setToShow(0)} 
        else {setToShow(3) } 
        
    }
    function showIncomes(e) {
        e.preventDefault();
        if (toShow !== 1) {setToShow(1)} 
        else {setToShow(3) } 
    }
    function showExpenses(e) {
        e.preventDefault();
        if (toShow !== 2) {setToShow(2)} 
        else {setToShow(3) } 
    }


    return (
    <>
        <section className="formButtons">
            <form onSubmit={showLast10}>
                    <Button type="submit" variant="outline-secondary"> Show Last Ten </Button>
            </form>
            <form onSubmit={showIncomes}>
                    <Button type="submit" variant="outline-secondary"> Show Incomes </Button>
            </form>
            <form onSubmit={showExpenses}>
                    <Button type="submit" variant="outline-secondary"> Show Expenses </Button>
            </form>
        </section>
        {toShow === 0? (<Last10/>):(null)}
        {toShow === 1? (<IncomesTable/>):(null)}
        {toShow === 2? (<ExpensesTable/>):(null)}
    </>
    );
}

export default BodyApp;
