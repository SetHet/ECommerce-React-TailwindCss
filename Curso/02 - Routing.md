# Pre Routing

Crearemos una carpeta `Pages` en `src/`, aqui se almacenaran las paginas de la web. En esta agregaremos `App.jsx` y `App.css`. En `main.jsx` hay que cambiar la ruta de `App.jsx`.

# Routing with React Router Dom

1. Instalar React Router Dom: `npm i react-router-dom`

2. Importarlo en `App.jsx`:

   ```jsx
   import { useRoutes, BrowserRouter } from "react-router-dom";
   ```

3. Scriptear el routing:

```jsx
// Separado de la funcion de componente, creamos un sub componente de rutas
// Este tiene el useRoutes con el arreglo de paths y componentes
const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/not-found", element: <NotFound /> },
    { path: "/signin", element: <Signin /> },
  ]);

  return routes;
};

// En el componente principal agregamos el <BrowserRouter> que asiste al <AppRouter> que es el useRoutes
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
```
