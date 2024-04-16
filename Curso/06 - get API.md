# Consumir una API

Mediante el fetch u otro metodo se puede consumir la api que presenta sus datos referidos en un link.

otras api:

- https://fakestoreapi.com/
- https://fakeapi.platzi.com/

Imagenes:

- https://www.pexels.com/es-es/buscar/ups/

## Pre consumir

Se utilizara el estado de react y usar el useEffect para correrlo en casos especificos.

### Llamar a la api y asignar a una card

```jsx
// Importar los estados y efectos de react
import { useState, useEffect } from "react";

// Sub-Componente importar
import Card from "../../Components/Card";

// Componente crear
function Home() {
  // Crear el estado con los datos de los items
  const [items, setItems] = useState(null);


  // Crear un efecto para consumir solo una vez la api
  useEffect(() => {
    // Crear una url con la peticion a la api
    let urlapi = `https://api.escuelajs.co/api/v1/products`;

    // Usar fetch para enviar un get a la api con solo la url
    fetch(urlapi)
      // La respuesta convertirla a json
      .then((response) => response.json())
      // Ingresar los datos en formato json al estado
      .then((data) => setItems(data))
      // Por si hay error enviar un console.error
      .catch((e) => console.error("Error consumir api" + e));
    },
    [] // por si se quiere repetir la busqueda y al cargar la web
  );
  return (
    <>
      <div>Home</div>
      {/* si hay items, mapear los datos del arreglo en las tarjetas */}
      {items?.map((data, index) => (
        <Card data={data} key={index} />
      ))}
    </!->
  );
}

export default Home;
```

### Usar los datos en la card

```jsx
import UpsPng from "../../assets/ups image.png";

function imgTry(url) {
  return url[0] == "[" ? UpsPng : url;
}

function Card({ data, index }) {
  console.log(index);
  console.log(data);
  return (
    <div className="bg-white/0 cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5">
          {data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={imgTry(data.images[0])}
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-blue-500 w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-base font-light">{data.title}</span>
        <span className="text-lg font-bold">${data.price}</span>
      </p>
    </div>
  );
}

export default Card;
```

## Filtrar la API
