import BodyWelcome from './BodyWelcome'
import NavBar from './NavBar'
import BodyApp from './BodyApp'


function App() {
  return (
    <div className="container">    
      <NavBar/>  
      <BodyWelcome/> 
      <BodyApp/> 
      <NavBar/>  
    </div>
  );
}

export default App;
