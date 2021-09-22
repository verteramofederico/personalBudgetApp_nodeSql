import {React, useState} from 'react';
import './IncomesExpenses.css'
import {Button} from 'react-bootstrap';
import EditItemForm from './EditItemForm'

function ExpenseItem(props) {
    
    let id = props.expense.id
    let amount = props.expense.amount
    let concept = props.expense.concept
    let date = props.expense.date

    const [checkEdit, setcheckEdit] = useState (0)

    function handleSubmitEdit(e) {
        e.preventDefault();
        console.log('You clicked submit.')
        if (checkEdit ===0) {setcheckEdit(1)} else {setcheckEdit(0)} 
    }
    

    function handleSubmitDelete(e) {
        e.preventDefault();
        console.log('You clicked Delete.');
    }

    return (
    <>    
            {props.expense !== undefined ? (<tr>
                <td>{id}</td>
                <td>{concept}</td>
                <td>${amount}</td>
                <td className="dateTable">{date}</td>
                <td>
                <form onSubmit={handleSubmitEdit}>
                <Button type="submit" variant="outline-secondary">Edit</Button>
                </form>
                {checkEdit!==0?(<EditItemForm/>):(null)}

                <form onSubmit={handleSubmitDelete}>
                <Button type="submit" variant="outline-secondary">Delete</Button>
                </form>
                </td>
                </tr>)
            : (<tr>
                <td>id</td>
                <td>concept</td>
                <td>amount</td>
                <td>date</td>
                <td>Edit</td>
                <td>Delete</td>
                </tr> )
            }
                
    </>
    );
}

export default ExpenseItem;