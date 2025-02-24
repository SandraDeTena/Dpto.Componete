# Dpto.Componete

**dpto.componete** es una aplicación de gestión de productos desarrollada con Angular 19 y Node.js. El proyecto utiliza componentes standalone, formularios reactivos y un patrón basado en servicio + repositorio para gestionar productos de forma local y reactiva. Además, se han implementado mejoras en accesibilidad y se ha aplicado la metodología BEM en algunos componentes para facilitar una maquetación limpia y escalable.

## Tecnologías

- **Angular:** v19.1.0
- **Node.js:** Recomendado v14 o superior
- **Express:** v4.18.2 (para SSR)
- **RxJS:** ~7.8.0
- **TypeScript:** ~5.7.2

## Descripción General

La aplicación permite:
- **Listar productos:** Se muestra una tabla con el nombre, precio y acciones (editar y eliminar) de cada producto.
- **Añadir productos:** Se utiliza un formulario reactivo con validaciones (campos obligatorios y precio positivo) para agregar nuevos productos.
- **Filtrar productos:** Se ofrece un filtro para visualizar únicamente los productos cuyo precio supere un valor dado.
- **Eliminar productos:** Al pulsar el botón de eliminar se muestra una confirmación para borrar el producto de la lista.

## Estructura del Proyecto

- **Componentes:**
  - **Product Add Component:**  
    Proporciona un formulario reactivo para la adición de productos. Valida que los campos 'nombre' y 'precio' se completen correctamente y, en caso de error, muestra mensajes en rojo y resalta los inputs inválidos.
  
  - **Product List Component:**  
    Muestra la lista de productos en una tabla. Incorpora un filtro basado en precio y opciones para editar o eliminar cada producto. La eliminación se confirma mediante un `confirm()` antes de proceder.
  
  - **Lib Dropdown Component:**  
    Ejemplo de componente de dropdown utilizando Shadow DOM para encapsular estilos, demostrando el uso de componentes standalone.
  
  - **Accesibilidad y Maquetación con BEM:**  
    Se han realizado mejoras en accesibilidad en diversos componentes (por ejemplo, se han agregado etiquetas semánticas, roles y atributos ARIA) y se ha aplicado la metodología BEM en componentes de maquetación (como una tarjeta de perfil).

- **Servicios:**
  - **ProductRepositoryService:**  
    Implementa un patrón Repository para gestionar los productos en un array local. Permite obtener, añadir y eliminar productos.
  
  - **ProductService:**  
    Utiliza un `BehaviorSubject` para mantener y emitir de forma reactiva la lista de productos. Este servicio actúa como intermediario entre los componentes y el repositorio.

- **Modelo (Enum de Product):**  
  Define la estructura de los productos (ID, nombre, precio).

## Funcionalidades Clave

- **Componentes Standalone:**  
  Cada componente importa individualmente los módulos que necesita (CommonModule, ReactiveFormsModule, etc.) sin depender de un AppModule tradicional.

- **Formularios Reactivos y Validaciones:**  
  Se implementan formularios reactivos para añadir productos, con validaciones que aseguran que los campos obligatorios se completan correctamente.

- **Gestión Reactiva:**  
  La comunicación entre componentes se maneja mediante observables (BehaviorSubject), permitiendo que el listado de productos se actualice de forma inmediata tras cualquier cambio.

- **Accesibilidad:**  
  Se han aplicado buenas prácticas de accesibilidad mediante el uso de etiquetas semánticas, roles, atributos ARIA y mejoras en la navegación y en los formularios.

- **Estilos con BEM:**  
  Se utiliza la metodología BEM para una maquetación clara y modular, facilitando el mantenimiento y la escalabilidad del CSS.

## Instalación y Ejecución

### Prerrequisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [Angular CLI](https://angular.io/cli) (v19 o superior)

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/SandraDeTena/Dpto.Componete.git
