import BodyWelcome from './BodyWelcome'
import NavBar from './NavBar'
import BodyApp from './BodyApp'
import "./App.css"
import { BrowserRouter, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <div className="container">    
      <NavBar/>  
      <BodyWelcome/> 
      <Route path="/"> <BodyApp/> </Route >
      <NavBar/>  
    </div>
    </BrowserRouter>
  );
}

export default App;
