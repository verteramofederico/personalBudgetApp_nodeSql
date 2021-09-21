import {React, useState} from 'react';
import './IncomesExpenses.css'
import EditItemForm from './EditItemForm'

function IncomeItem(props) {
    
    let id = props.income.id
    let amount = props.income.amount
    let concept = props.income.concept
    let date = props.income.date

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
            {props.income === undefined ? (<p>cargando</p>)
            : (
            <tr>
            <td>{id}</td>
            <td>{concept}</td>
            <td>{amount}</td>
            <td>{date}</td>
            <td>
            <form onSubmit={handleSubmitEdit}>
            <button type="submit">Edit</button>
            </form>

            {checkEdit!==0?(<EditItemForm/>):(null)}

            <form onSubmit={handleSubmitDelete}>
            <button type="submit">Delete</button>
            </form>
            </td>
            </tr>
            )
            }
                
    </>
    );
}

export default IncomeItem;