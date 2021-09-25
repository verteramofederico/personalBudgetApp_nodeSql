import {React, useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';

function FormProps(props) {
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
        }
        
        useEffect(() => {
            /* console.log(data) */
            fetch('http://localhost:3001/api/create', {
                method: 'POST',
                body:  JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response))         
        }, [data])

                
    return (
    <>


<form onSubmit={handleSubmitEdit} method="POST" action="/create">
        
        <label htmlFor="category">Category</label>
            <select name="category" >
                <option value="0">undefined</option>
                <option value="4">{props.category[0]}</option>
                <option value="1">{props.category[1]}</option>
                <option value="2">{props.category[2]}</option>
                <option value="3">{props.category[3]}</option>                
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

export default FormProps;