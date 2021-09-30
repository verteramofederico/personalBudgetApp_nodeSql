import {React, useState, useEffect} from 'react';
import {Button, Alert} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

function FormProps(props) {
    const [data, setData] = useState ([])
    const [errors, setErrors] = useState ([])
    const [toRedirect, settoRedirect] = useState (0)

        function handleSubmitEdit (e) {
            e.preventDefault()
            if (!e.target.concept.value || !e.target.amount.value || !e.target.date.value) {
                setErrors("You must entry concept, amount and date")
            }
            else {
                    setData({
                        type: props.type,
                        concept: e.target.concept.value,
                        amount: e.target.amount.value,
                        date: e.target.date.value,
                        categoriesId: e.target.category.value,
                    })
                    setErrors("Submitted")
                    e.target.concept.value = ""; e.target.amount.value = "";
                    e.target.date.value = ""; e.target.category.value = "0"
                    settoRedirect(1)
                }    
        }

        useEffect(() => {
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
                <option value="1">undefined</option>
                <option value="5">{props.category[0]}</option>
                <option value="2">{props.category[1]}</option>
                <option value="3">{props.category[2]}</option>
                <option value="4">{props.category[3]}</option>                
            </select>

        <label htmlFor="concept">Concept</label>
            <input type="text" name="concept" placeholder="Ej: lunch" />

        <label htmlFor="amount">Amount</label>
            <input type="text" name="amount" placeholder="Ej: 1500" />

        <label htmlFor="date">Date</label>
            <input type="date" name="date" min="2020-01-01" max="2022-12-31" />

        <Button type="submit" variant="outline-secondary"> Submit </Button>
    </form>
        {errors.length > 15 ? <Alert variant='danger'>{errors}</Alert> : null}
        {errors === "Submitted" ? <Alert variant='success'>{errors}</Alert> : null}

        {toRedirect !==0  ? <Redirect to="/" /> : null }
    </>
    );
}

export default FormProps;