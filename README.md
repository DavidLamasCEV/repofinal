# PokéApp – Proyecto React + Vite + PokéAPI

PokéApp es una aplicación desarrollada en **React + Vite** que consume datos en tiempo real desde la **PokéAPI**.  
El objetivo del proyecto es practicar la construcción de una **SPA** con componentes reutilizables, navegación mediante **React Router**, consumo de **APIs externas** y aplicación de estilos con **Bootstrap** y **CSS personalizado**.

La aplicación permite **consultar Pokémon, ver sus detalles, visualizar sus tipos, estadísticas básicas y una imagen oficial** proporcionada por la API. Además, incluye páginas adicionales como **Perfil, Contacto** y un **About** explicando decisiones técnicas.

![Vista de la aplicación](./src/assets/readme/screenshot.png)


---

## 1. Tecnologías utilizadas

### Frontend
- **React**: construcción de la interfaz mediante componentes.
- **Vite**: entorno de desarrollo rápido y moderno.
- **React Router DOM**: gestión de rutas sin recargar la página.
- **Axios**: consumo de datos desde la PokéAPI.
- **Bootstrap**: sistema de estilos y utilidades responsive.
- **CSS personalizado**: integración de Google Fonts y estilos propios.

### API
- **PokéAPI** (`https://pokeapi.co/`)

---

## 2. Funcionalidades principales

### ✔ Listado de Pokémon
- **Se cargan los Pokémon directamente desde la PokéAPI.**
- **Cada Pokémon se muestra con una tarjeta personalizada.**
- **Incluye una imagen, su ID formateado y su nombre.**

### ✔ Página de detalles
Cada Pokémon tiene una vista propia con:
- Nombre e ID formateado.
- Sprite oficial (`official-artwork`).
- Tipos traducidos al español.
- Colores de tipo asignados mediante un mapa de clases CSS.
- Altura y peso convertidos a unidades reales (m / kg).
- Número de habilidades registradas.
- Botón “Volver al inicio” integrado con React Router.

### ✔ Navbar con diseño adaptado
- Ícono personalizado (Pokéball importada desde `/assets`).
- Colores adaptados al estilo de la app.
- Navegación entre página principal, About, Perfil y Contacto.

### ✔ Página Perfil
- Datos simulados del usuario: nombre, edad, profesión, Pokémon favorito, etc.
- Uso de badges personalizados y Google Fonts.
- Imagen de perfil importada desde assets.

### ✔ Página Contacto
- Formulario con campos básicos controlados por React.
- Validación simple.
- Diseño con Bootstrap.

### ✔ Página About
Incluye explicación del proyecto:
- Tecnologías empleadas.
- Arquitectura general.
- Decisiones de diseño.
- Mejoras pendientes.

---

## 3. Integración con PokéAPI

Datos obtenidos desde:

```
GET https://pokeapi.co/api/v2/pokemon/{id}
```

Traducción de tipos al español:

```
const typeNameES = {
  fire: "Fuego",
  water: "Agua",
  grass: "Planta",
  electric: "Eléctrico",
  poison: "Veneno",
  normal: "Normal",
  flying: "Volador"
}
```

Colores asignados mediante Bootstrap:

```
const typeColorMap = {
  fire: "bg-danger text-light",
  water: "bg-primary text-light",
  grass: "bg-success text-light",
  electric: "bg-warning text-dark",
  poison: "bg-secondary text-light"
}
```
---

## 4. Instalación

```
npm install
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173/
```
---

## 5. Autor

Proyecto desarrollado por **David Lamas - TSAPP2MA2526**

---

