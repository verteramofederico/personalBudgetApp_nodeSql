import {React, useState} from 'react';
import './IncomesExpenses.css'
import EditItemForm from './EditItemForm'
import {Button} from 'react-bootstrap';


function OrderedItem(props) {

    let id = props.item.id
    let type = props.item.type
    let amount = props.item.amount
    let category = props.item.categoriesId
    let concept = props.item.concept
    let date = props.item.date

    const [checkEdit, setcheckEdit] = useState (0)

    function handleSubmitEdit(e) {
        e.preventDefault();
        if (checkEdit ===0) {setcheckEdit(1)} else {setcheckEdit(0)} 
    }
    
    function handleSubmitDelete(e) {
        e.preventDefault();
    }

    return (
    <>    
            {props.item === undefined ? (<p>cargando</p>)
            : (
            <tr>
            <td>{id}</td>
            <td>{type}</td>
            <td>{concept}</td>
            <td>${amount}</td>
            <td>{category}</td>
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
            </tr>
            )
            }
                
    </>
    );
}

export default OrderedItem;