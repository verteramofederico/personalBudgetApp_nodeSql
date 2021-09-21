import {Table} from 'react-bootstrap/';
import IncomesExpensesCss from './IncomesExpenses.css'

function Incomes() {
    return (
    <section className="table">
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Concept</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Modify</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
            <button>Edit</button>
            <button>Delete</button>
            </td>
            </tr>
        </tbody>
        </Table>

    </section>
    );
}

export default Incomes;