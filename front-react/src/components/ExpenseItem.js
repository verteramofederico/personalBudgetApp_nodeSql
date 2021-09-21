import './IncomesExpenses.css'


function ExpenseItem(props) {
    
    let id = props.expense.id
    let amount = props.expense.amount
    let concept = props.expense.concept
    let date = props.expense.date

    return (
    <>    
            {props.expense !== undefined ? (<tr>
                <td>{id}</td>
                <td>{concept}</td>
                <td>{amount}</td>
                <td>{date}</td>
                <td>
                <button>Edit</button>
                <button>Delete</button>
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