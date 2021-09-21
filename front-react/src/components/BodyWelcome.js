import Jumbotron from 'react-bootstrap/Jumbotron';
import './BodyWelcome.css'

function BodyWelcome() {
    return (
    <section className="JumbotronCss" >    
        <Jumbotron >
            <h1 className="display-3">Balance App</h1>
            <p className="lead">This is a simple balance App where you can see, register, modify and delete your incomes and expenses and receive a balance. </p>
        </Jumbotron>
    </section>
    )
}

export default BodyWelcome;
