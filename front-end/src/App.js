import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Menu from './pages/Menu';
//adicionar as rotas aqui!
function App() {
  return(
    <>
    <Routes>
      <Route path = "login" element={<LoginPage />}/>
      <Route path = "menu" element={<Menu />}/>
    </Routes> 
    </> 
  );
}

export default App;
//paginas devem ser feitas em (./pages).
// e o css na (/.styles).