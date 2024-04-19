import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home';
//adicionar as rotas aqui!
function App() {
  return(
    <>
    <Routes>
      <Route path = "login" element={<LoginPage />}/>
      <Route path = "home" element={<Home />}/>
      <Route path = "*" element={<Home />}/>
    </Routes> 
    </> 
  );
}

export default App;
//paginas devem ser feitas em (./pages).
// e o css na (/.styles).