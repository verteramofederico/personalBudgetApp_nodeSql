import {Button} from 'react-bootstrap';

function EntryForm() {
    return (
    <>
        <form method="POST" action="/create">
        <label htmlFor="type">Type</label>
            <select name="type" >
                <option value="{income}">Income</option>
                <option value="{expense}">Expense</option>
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

export default EntryForm;