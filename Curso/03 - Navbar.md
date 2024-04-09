# Navbar

React tiene en `react-router-dom` el NavLink, este permite trabajar con links internos de la aplicacion. Este debe ser usado dentro del BrowserRouter sino tirara error.

Su uso:

```jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Storely</NavLink>
        </li>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        ....
      </ul>
    </nav>
  );
}

export default Navbar;
```

### Navlink propiedades

- `to`: indica la direccion que se llamara
- `isActive`: indica si el link esta activo (actual)

  ```jsx
  // estilo css en react
  const activeStyle = {
    textDecoration: "underline",
  };

  <li>
    <NavLink
      to="/"
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      All
    </NavLink>
  </li>;
  ```
