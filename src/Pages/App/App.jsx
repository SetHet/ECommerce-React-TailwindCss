import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'

const  AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/not-found', element: <NotFound /> },
    { path: '/signin', element: <Signin /> },
  ])

  return routes
}

function App() {
  return (
    <>
     <BrowserRouter>
      <AppRoutes />
     </BrowserRouter> 
    </>
  )
}

export default App
