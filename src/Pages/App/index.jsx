import { useRoutes,BrowserRouter } from 'react-router-dom'
import { DonateProvider } from '../../Context'
import Home from '../Home'
import LogIn from '../Login'
import Adoptions from '../Adoptions'
import Donations from '../Donations'
import Nfound from '../NotFound'
import Navbar from '../../Components/Navbar';
import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/todos', element: <Home/>},
    {path: '/Machos', element: <Home/>},
    {path: '/Hembras', element: <Home/>},
    {path: '/logIn', element: <LogIn/>},
    {path: '/adoptions', element: <Adoptions/>},
    {path: '/donations', element: <Donations/>},
    {path: '/*', element: <Nfound/>}
  ]);

  return routes;
}


const App = () => {
  return (
    <DonateProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
      </BrowserRouter>
    </DonateProvider>
    
  )
}

export default App
