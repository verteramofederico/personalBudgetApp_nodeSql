import BodyWelcome from './BodyWelcome'
import NavBar from './NavBar'
import BodyApp from './BodyApp'


function App() {
  return (
    <div className="container">    
      <NavBar/>  
      <BodyWelcome/> 
      <BodyApp/> 
    </div>
  );
}

export default App;
