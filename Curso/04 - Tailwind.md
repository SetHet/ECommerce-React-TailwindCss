# Tailwind

Es una libreria con clases de css minimalistas que permiten mediante clases en html asignar estilos.

## Uso

```html
<div class="bg-red-100">Tailwind Background Red claro</div>
```

## Cheact Sheet

https://tailwindcomponents.com/cheatsheet/

Tabla con todos las clases de estilo de tailwind.

## Usos cotidianos

### flex

```html
<nav class="flex justify-between items-center"></nav>
```

<img src='img/nav flex example.png'>

### Card

```js
function Card() {
  return (
    <div className="bg-white/0 cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5">
          Tipo
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.pexels.com/photos/20619195/pexels-photo-20619195/free-photo-of-comida-madera-amanecer-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="nombre descriptivo"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-blue-500 w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-base font-light">Nombre</span>
        <span className="text-lg font-bold">$42.00</span>
      </p>
    </div>
  );
}
```
