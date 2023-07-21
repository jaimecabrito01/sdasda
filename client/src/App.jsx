import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import NavBar  from './components/NavBar.'
function App() {
  return (
    <div>
      <Router>
       <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
            
          
          <Route path='/register' element={<Register/>}/>
            
          
        </Routes>
        </Router>
    </div>    
      
 )
}

export default App
