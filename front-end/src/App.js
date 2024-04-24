import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home';
import Logout from './pages/Logout';
import Progress from './pages/Progress';
//adicionar as rotas aqui!
function App() {
  return(
    <>
    <Routes>
      <Route path = "login" element={<LoginPage />}/>
      <Route path = "home" element={<Home />}/>
      <Route path = "*" element={<Home />}/>
      <Route path = "logout" element={<Logout />}/>
      <Route path = "progress" element={<Progress />}/>
    </Routes> 
    </> 
  );
}

export default App;
//paginas devem ser feitas em (./pages).
// e o css na (/.styles).