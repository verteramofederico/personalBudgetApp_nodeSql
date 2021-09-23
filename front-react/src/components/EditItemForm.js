import {React, useState} from 'react';
import {Button} from 'react-bootstrap';

function EditItemFrom(props) {
    const [data, setData] = useState ([])

    function handleSubmitEdit (e) {
            e.preventDefault()
            setData({
                    type: props.type,
                    concept: e.target.concept.value,
                    amount: e.target.amount.value,
                    date: e.target.date.value,
                    categoriesId: e.target.category.value,
                });
            fetch('http://localhost:3001/api/edit', {
                method: 'POST',
                body: JSON.stringify({ data }),
                headers: { 'Content-Type': 'application/json' },
            })           
                } 


    return (
    <>    
        <form onSubmit={handleSubmitEdit} method="POST" action="/edit">
        
        <label htmlFor="category">Category</label>
            <select name="category" >               
                <option value="0">undefined</option>
                <option value="4">{props.category[0]}</option>
                <option value="1">{props.category[1]}</option>
                <option value="2">{props.category[2]}</option>
                <option value="3">{props.category[3]}</option>                
            </select>

        <label htmlFor="concept">Concept</label>
            <input type="text" name="concept" placeholder={props.concept} />

        <label htmlFor="amount">Amount</label>
            <input type="text"  name="amount" placeholder={props.amount} />

        <label htmlFor="date">Date</label>
            <input type="date" placeholder={props.date} name="date" min="2020-01-01" max="2022-12-31" />

        <Button type="submit" variant="outline-secondary"> Submit </Button>
    </form>
    </>
    );
}

export default EditItemFrom;