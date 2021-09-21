import IncomesTable from './IncomesTable'
import ExpensesTable from './ExpensesTable'
import EntryForm from './EntryForm'
import './BodyApp.css'

function BodyApp() {
    return (
    <>
        <section>
        <EntryForm/>
        </section>
        <section className="tableContainer">
        <IncomesTable/>
        <ExpensesTable/>
        </section> 

    </>
    );
}

export default BodyApp;
