import {React, useState} from 'react';
import './IncomesExpenses.css'
import EditItemForm from './EditItemForm'
import DeleteItemForm from './DeleteItemForm'
import {Button} from 'react-bootstrap';


function OrderedItem(props) {

    let id = props.item.id
    let type = props.item.type
    let amount = props.item.amount
    let concept = props.item.concept
    let date = props.item.date
    let category = "undefined"
    let categoryId = props.item.categoryId
    if (props.item.IncomesCategories) {category = props.item.IncomesCategories.name}
    if (props.item.ExpensesCategories) {category = props.item.ExpensesCategories.name}

    const [checkEdit, setcheckEdit] = useState (0)
    const [checkDelete, setcheckDelete] = useState (0)

    function handleSubmitEdit(e) {
        e.preventDefault();
        if (checkEdit ===0) {setcheckEdit(1)} else {setcheckEdit(0)} 
    }
    
    function handleSubmitDelete(e) {
        e.preventDefault();
        if (checkDelete ===0) {setcheckDelete(1)} else {setcheckDelete(0)} 
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
            {checkDelete ===0 ? <Button type="submit" variant="outline-secondary">Edit</Button> : null}
            </form>

            {checkEdit!==0 && props.item.type === "Expense" ?(<EditItemForm 
                id={id} 
                type={type} 
                concept={concept}
                amount={amount}
                categoryId={categoryId}
                />):(null)}
            
            {checkEdit!==0 && props.item.type === "Income" ?(<EditItemForm 
                id={id} 
                type={type} 
                concept={concept}
                amount={amount}
                categoryId={categoryId}
                />):(null)}

            <form onSubmit={handleSubmitDelete}>
            {checkEdit ===0 ? <Button type="submit" variant="outline-secondary">Delete</Button> : null}
            </form>

            {checkDelete!==0 && props.item.type === "Expense" ?(<DeleteItemForm id={id} type={type} />):(null)}
            
            {checkDelete!==0 && props.item.type === "Income" ?(<DeleteItemForm id={id} type={type}  />):(null)}
            
            </td>
            </tr>
            )
            }
                
    </>
    );
}

export default OrderedItem;