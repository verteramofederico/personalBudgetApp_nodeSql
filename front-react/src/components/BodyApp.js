import {React} from 'react';
import Balance from "./Balance"
import EntryForm from './EntryForm'
import ShowList from './ShowList'
import { Route } from 'react-router-dom';

function BodyApp() {
    return (
    <>
        <section className="container">
        <Balance/>
        </section>
        <section className="container" >
        <EntryForm/>
        </section>
        <section className="container">
        <Route path="/"> <ShowList/> </Route >
        </section> 
    </>
    );
}

export default BodyApp;
