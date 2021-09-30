import BodyWelcome from './BodyWelcome'
import NavBar from './NavBar'
import BodyApp from './BodyApp'
import "./App.css"
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <div className="container">    
      <NavBar/>  
      <BodyWelcome/> 
      <BodyApp/> 
      <NavBar/>  
    </div>
    </BrowserRouter>
  );
}

export default App;
