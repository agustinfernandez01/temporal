import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Admin from './pages/Admin'
import Tucuman from './pages/zonas/Tucuman'
import Bsas from './pages/zonas/Bsas'
import Maintucuman from './componentes/Maintucuman'
import Mainadmin from './componentes/Mainadmin'
import Mainbsas from './componentes/Mainbsas'
import Agregar from './pages/Agregar'
import Mainpropiedad from './componentes/Mainpropiedad'
import Singleprop from './pages/Singleprop'



function App() {

  return (
    <div id="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          {/*TUCUMAN*/}
          <Route path='/Tucuman' element={<Tucuman/>}/>
          <Route path="/propiedadest" element={<Maintucuman/>}></Route>
          {/* PROPIEDAD */}
          <Route path="/propiedadest/:id" element={<Singleprop/>}></Route>
          <Route path="/propiedad" element={<Mainpropiedad/>}></Route>
          {/*BUENOS AIRES*/}
          <Route path='/buenosaires' element={<Bsas/>}/>
          <Route path="/propiedadesb" element={<Mainbsas/>}></Route>
          {/*Admin*/}
          <Route path='/administracion' element={<Mainadmin/>}></Route>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/agregar' element={<Agregar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
