import {React, useState} from 'react';
import {Button} from 'react-bootstrap';

function ExpenseForm() {

    const [data, setData] = useState ([])

    function handleSubmitEdit (e) {
            e.preventDefault()
            setData({
                    type: "expense",
                    concept: e.target.concept.value,
                    amount: e.target.amount.value,
                    date: e.target.date.value,
                    categoriesId: e.target.category.value,
                });
            fetch('http://localhost:3001/api/create', {
                method: 'POST',
                body: JSON.stringify({ data }),
                headers: { 'Content-Type': 'application/json' },
            })           
                } 
                
    return (
    <>


    <form onSubmit={handleSubmitEdit} method="POST" action="/create">
        
        <label htmlFor="category">Category</label>
            <select name="category" >
                <option value="4">Other Exp.</option>
                <option value="1">House</option>
                <option value="2">Clothes</option>
                <option value="3">Health</option>                
            </select>

        <label htmlFor="concept">Concept</label>
            <input type="text" name="concept" placeholder="Ej: lunch" />

        <label htmlFor="amount">Amount</label>
            <input type="text" name="amount" placeholder="Ej: 1500" />

        <label htmlFor="date">Date</label>
            <input type="date" name="date" min="2020-01-01" max="2022-12-31" />

        <Button type="submit" variant="outline-secondary"> Submit </Button>
    </form>

    </>
    );
}

export default ExpenseForm;