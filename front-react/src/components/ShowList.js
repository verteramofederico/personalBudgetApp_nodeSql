import {React, useState} from 'react';
import ShowListItem from './ShowListItem';
import {Button} from 'react-bootstrap';
import  './ShowList.css'
import { Route, Redirect } from 'react-router-dom';

function BodyApp() {

    const [toShow, setToShow] = useState (0)


    function showLast10(e) {
        e.preventDefault();
        if (toShow !== 3) {setToShow(3)} 
        else {setToShow(4) } 
        
    }
    function showIncomes(e) {
        e.preventDefault();
        if (toShow !== 1) {setToShow(1)} 
        else {setToShow(4) } 
    }
    function showExpenses(e) {
        e.preventDefault();
        if (toShow !== 2) {setToShow(2)} 
        else {setToShow(4) } 
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

        <Route path="/show/last10"> <ShowListItem option={0}/> </Route >
        <Route path="/show/incomes"> <ShowListItem option={1}/> </Route >
        <Route path="/show/expenses"> <ShowListItem option={2}/> </Route >

        {toShow === 1? <Redirect to={{ pathname: "/show/incomes"}}/> :(null)}
        {toShow === 2? <Redirect to={{pathname: "/show/expenses"}}/>:(null)}
        {toShow === 3? <Redirect to={{pathname: "/show/last10"}}/>:(null)}
        {toShow === 4? <Redirect to={{pathname: "/"}}/>:(null)} 
    </>
    );
}

export default BodyApp;
