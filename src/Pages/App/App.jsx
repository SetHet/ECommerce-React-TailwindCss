import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import Navbar from '../../Components/Navbar'
import Layout from '../../Components/Layout'

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
      <Navbar/>
      <Layout>
        <AppRoutes />
      </Layout>
     </BrowserRouter> 
    </>
  )
}

export default App
