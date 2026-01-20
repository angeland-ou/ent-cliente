
# Proyecto Entorno Cliente 01

Este proyecto es una plataforma de reserva de sesiones espirituales del lado del cliente. La aplicación permite a los usuarios navegar por la meditación grupal y las sesiones espirituales, agregarlas a un carrito de compras y acceder a la información de contacto para reservar.

## Tecnologías utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías y herramientas:

- HTML5 / CSS3
Lenguajes de marcado y estilos utilizados en la estructura y presentación de las páginas.

- JavaScript ES6
Lenguaje principal del proyecto, lógica de aplicaciones, gestión de carritos, manipulación DOM.

- Git & GitHub
Control de versiones y alojamiento del repositorio.

## Estructura

| Elemento | Descripción |
|--------|-------------|
| `/` | Directorio raíz del proyecto |
| `index.html` | Página principal (landing page) de la aplicación |
| `sesiones.html` | Página de catálogo donde se muestran las sesiones disponibles |
| `nosotros.html` | Página informativa sobre la empresa o proyecto |
| `contacto.html` | Página de contacto con formulario o información de comunicación |
| `css/` | Carpeta que contiene los estilos de la aplicación |
| `js/` | Carpeta que contiene la lógica JavaScript de la aplicación |
| `js/main.js` | Punto de entrada de la aplicación; inicializa módulos y eventos |
| `js/data.js` | Módulo encargado de la carga y gestión de los datos |
| `js/catalogo.js` | Renderizado del catálogo de sesiones |
| `js/carrito.js` | Gestión del estado del carrito (añadir, eliminar, actualizar) |
| `js/ui.js` | Manejo de eventos de la interfaz de usuario |
| `js/storage.js` | Abstracción para el uso de `localStorage` |
| `js/utils.js` | Funciones utilitarias reutilizables |
| `data/` | Carpeta de datos estáticos |
| `data/sesiones.json` | Archivo JSON con la información de las sesiones (6 elementos) |
| `img/` | Carpeta de recursos gráficos |

## Despliegue

La aplicación está desplegada Netlify.

https://ent-cliente.netlify.app/

## Instalación

Clona este repositorio:

git clone https://github.com/angeland-ou/ent-servidor.git