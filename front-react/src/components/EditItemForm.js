function EditItemFrom() {

    return (
    <>    
        <form method="POST" action="/modifier/<%= incomes[index].id %>?_method=PUT">
                <input type="text" name="type"  placeholder="incomes" />
                <label for="concept">Concept</label>
                <input type="text" name="concept"  placeholder="<%= incomes[index].concept %>" />
                
                <label for="amount">Amount</label>
                    <input type="text" name="amount"  placeholder="<%= incomes[index].amount%>" />
        
                <label for="date">Date</label>
                    <input type="date" name="date" min="2020-01-01" max="2022-12-31" />
        
                <button type="submit" >Submit</button>
        </form>
    </>
    );
}

export default EditItemFrom;