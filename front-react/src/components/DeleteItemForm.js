import {React, useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';

function DeleteItemForm(props) {

    const [data, setData] = useState ([])

    function handleSubmitEdit (e) {
            e.preventDefault()
            setData({
                    type: props.type,
                    id: e.target.id.value
                })     
            }

        useEffect(() => {
            console.log(data)
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

    </>
    );
}

export default DeleteItemForm