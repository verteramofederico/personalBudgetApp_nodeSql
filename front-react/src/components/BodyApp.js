import IncomesTable from './IncomesTable'
import ExpensesTable from './ExpensesTable'
import EntryForm from './EntryForm'
import './BodyApp.css'

function BodyApp() {
    return (
    <>
        <section className="container">
        <EntryForm/>
        </section>
        <section className="container" id="tableContainer">
        <IncomesTable/> 
        <ExpensesTable/>
        </section> 

    </>
    );
}

export default BodyApp;
