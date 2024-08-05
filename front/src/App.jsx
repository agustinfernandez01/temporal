import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Admin from './pages/Admin'
import Tucuman from './pages/zonas/Tucuman'
import Bsas from './pages/zonas/Bsas'
import Maintucuman from './componentes/Maintucuman'
import Mainadmin from './componentes/Mainadmin'
import Mainbsas from './componentes/Mainbsas'



function App() {

  return (
    <div id="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path='/buenosaires' element={<Bsas/>}/>
          <Route path='/Tucuman' element={<Tucuman/>}/>
          <Route path="/propiedadest" element={<Maintucuman/>}></Route>
          <Route path="/propiedadesb" element={<Mainbsas/>}></Route>
          <Route path='/administracion' element={<Mainadmin/>}></Route>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
