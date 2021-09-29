import {React, useState, useEffect} from 'react';
import {Button, Alert} from 'react-bootstrap';

function EditItemFrom(props) {
    const [data, setData] = useState ([])
    const [errors, setErrors] = useState ([])

    function handleSubmitEdit (e) {
            e.preventDefault()
            if (!e.target.concept.value || !e.target.amount.value || !e.target.date.value) {
                setErrors("You must entry concept, amount and date")
            }
            else 
            {setData({
                    type: props.type,
                    categoriesId: props.type.categoriesId,
                    concept: e.target.concept.value,
                    amount: e.target.amount.value,
                    date: e.target.date.value,
                    id: e.target.id.value
                });
            setErrors("")
                    e.target.concept.value = ""; e.target.amount.value = "";
                    e.target.date.value = ""
                }           
            } 

        useEffect(() => {
            console.log(data)
            fetch(`http://localhost:3001/api/modifier/${data.id}`, {
                method: 'PUT',
                body:  JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response))         
        }, [data])



    return (
    <>    
        <form onSubmit={handleSubmitEdit}>

        <input name="id" type="hidden" value={props.id} />

        <label htmlFor="concept">Concept</label>
            <input type="text" name="concept" placeholder={props.concept} />

        <label htmlFor="amount">Amount</label>
            <input type="text"  name="amount" placeholder={props.amount} />

        <label htmlFor="date">Date</label>
            <input type="date" value={props.date} name="date" min="2020-01-01" max="2022-12-31" />

        <Button type="submit" variant="outline-secondary"> Submit </Button>
    </form>
    {errors.length > 0 ? <Alert variant='danger'>{errors}</Alert> : null}
    </>
    );
}

export default EditItemFrom;