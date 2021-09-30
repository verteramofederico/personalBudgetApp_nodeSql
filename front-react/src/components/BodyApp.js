import {React} from 'react';
import Balance from "./Balance"
import EntryForm from './EntryForm'
import ShowList from './ShowList'


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
        <ShowList/>
        </section> 
    </>
    );
}

export default BodyApp;
