# Instalacion con vite

Se utilizara la herramienta vite para crear el proyecto en react.

1. Ingresar a la carpeta previa a la carpeta de desarrollo y abrir una terminal con la direccion actual.
2. Ingresar en la terminal e ingresar: `npm create vite@latest`
3. Seleccionar: Nombre proyecto, nombre en package del proyecto, libreria `React`, usar `JavaScript`.
4. Abrir con Visual Studio Code u otro editor de codigo a eleccion.

# Instalar Tailwind CSS

[Documentacion Tailwind CSS 👈](https://tailwindcss.com/docs/guides/vite)

1. Usar el comando: `npm install -D tailwindcss postcss autoprefixer`. Para instalar las dependencias de tailwind.
2. Usar el comando: `npx tailwindcss init -p`. Para inicializar tailwind.
3. Ingresar en `tailwind.config.js` el siguiente contenido para agregar los paths que interactuaran con tailwind:

   ```json
   {
       ...
       content: [
           "./index.html",
           "./src/**/*.{js,ts,jsx,tsx}",
       ],
       ...
   }
   ```

4. Agregar al CSS padre el tailwind, en este caso es en `src/App.css` o `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
5. Probar que funciono: `npm run dev`
6. Eliminar lo que no se necesite para empezar un proyecto de 0 con tailwind:
   - assets
   - otros estilos css de App.css y index.css
   - cosas de App.js
7. Probar que funciona:

   ```js
   import "./App.css";

   function App() {
     return (
       <>
         <div className="bg-red-500">Hola</div>
       </>
     );
   }

   export default App;
   ```
