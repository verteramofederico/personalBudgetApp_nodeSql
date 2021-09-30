import {React, useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';  

function DeleteItemForm(props) {

    const [data, setData] = useState ([])
    const [toRedirect, settoRedirect] = useState (0)

    function handleSubmitEdit (e) {
            e.preventDefault()
            setData({
                    type: props.type,
                    id: e.target.id.value
                }) 
            settoRedirect(1)
            }
    

        useEffect(() => {
            fetch(`http://localhost:3001/api/delete/${data.id}`, {
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

        <Button type="submit" variant="outline-danger"> Confirme Delete </Button>
        </form>
        {toRedirect !==0  ? <Redirect to="/" /> : null }
    </>
    );
}

export default DeleteItemForm