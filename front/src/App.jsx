import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Admin from './pages/Admin'
import Tucuman from './pages/zonas/Tucuman'
import Bsas from './pages/zonas/Bsas'
import Maintucuman from './componentes/Maintucuman'
import Mainadmin from './componentes/Mainadmin'
import Mainbsas from './componentes/Mainbsas'
import Agregar from './pages/Agregar'
import Mainpropiedadt from './componentes/Mainpropiedadt'
import Singlepropt from './pages/Singlepropt'
import Singlepropb from './pages/Singlepropb'
import Verprop from './pages/Verprop'
import Mainverprop from './componentes/Mainverprop'
import Verpropb from './pages/Verpropb'
import Loginad from './pages/Loginad'
import Mainloginad from './componentes/Mainloginad'
import Zonas from './pages/Zonas'
import Update from "./pages/Update"
import Contactanos from './pages/Contactanos'
import './css/app.css'





function App() {

  return (
    <div id="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path='/Zonas' element={<Zonas/>}/>
          <Route path='/Contactanos' element={<Contactanos/>}/>
          {/*TUCUMAN*/}
          <Route path='/Tucuman' element={<Tucuman/>}/>
          <Route path="/propiedadest" element={<Maintucuman/>}></Route>
          <Route path="/propiedadest/:id" element={<Singlepropt/>}></Route>
          <Route path="/propiedadest" element={<Mainpropiedadt/>}></Route>
          {/*BUENOS AIRES*/}
          <Route path='/buenosaires' element={<Bsas/>}/>
          <Route path="/propiedadesb" element={<Mainbsas/>}></Route>
          <Route path='/propiedadesb/:id' element={<Singlepropb/>}></Route>
          <Route path="/propiedadesb" element={<Mainpropiedadt/>}></Route>
          {/*Admin*/}
          <Route path='/admin/update/:id' element={<Update/>}></Route>
          <Route path='/admin/verb/:id' element={<Verpropb/>}></Route>
          <Route path='/admin/ver/:id' element={<Verprop/>}> </Route>
          <Route path='/admin/mainver' element={<Mainverprop/>}> </Route>
          <Route path='/administracion' element={<Mainadmin/>}></Route>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/logadmin' element={<Loginad/>}></Route>
          <Route path='/logadminbody' element={<Mainloginad/>}></Route>
          <Route path='/agregar' element={<Agregar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
