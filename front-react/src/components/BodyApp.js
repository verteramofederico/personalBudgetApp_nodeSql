import {Table} from 'react-bootstrap/';
import Incomes from './Incomes'
import Expenses from './Expenses'
import BodyAppCss from './BodyApp.css'

function BodyApp() {
    return (
    <>
        <section className="tableContainer">
        <Incomes/>
        <Expenses/>
        </section> 

    </>
    );
}

export default BodyApp;
