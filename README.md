# PROYECTO MÓDULO 2: Billetera Virtual (Alke Wallet)

Aplicación web simulada de banca en línea desarrollada con JavaScript, HTML5 y CSS3, enfocada en la gestión de estados financieros, manipulación del DOM y experiencia de usuario (UX/UI).

## Sobre el proyecto
Este proyecto consiste en el desarrollo de una interfaz web para una billetera digital (E-wallet). El sistema simula un entorno bancario completo donde el usuario puede autenticarse, visualizar su balance en tiempo real, realizar transacciones monetarias y gestionar sus contactos. El objetivo principal fue implementar lógica de programación del lado del cliente para manejar flujos de datos y validaciones sin necesidad de un backend real, utilizando almacenamiento local y estructuras de datos en JavaScript.

## Funciones Principales
El sistema Alke Wallet ofrece las siguientes capacidades operativas:

* **Autenticación de Usuarios:** Sistema de login con validación de credenciales predefinidas y redireccionamiento seguro al panel principal.
* **Dashboard Dinámico:** Visualización del saldo actual y saludo personalizado basado en la información del usuario autenticado.
* **Gestión de Transferencias:** Módulo para enviar dinero a contactos registrados, con validación de fondos insuficientes y actualización inmediata del saldo.
* **Depósitos:** Funcionalidad para simular el ingreso de dinero a la cuenta, actualizando el estado financiero en tiempo real.
* **Historial de Transacciones:** Registro cronológico de todos los movimientos (ingresos y egresos) visualizados en una lista detallada.
* **Gestión de Contactos:** Capacidad para agregar nuevos destinatarios a la lista de transferencia, persistiendo la información durante la sesión.
* **Interfaz Adaptativa:** Diseño responsivo implementado con Bootstrap 5, incluyendo un menú de navegación lateral (Sidebar) y modo oscuro/claro integrado.

## Instalación y Uso
Para ejecutar el sistema en un entorno local, siga estos pasos:

1. Clonar el repositorio o descargar los archivos fuente.
2. Abrir la carpeta del proyecto en un editor de código (se recomienda Visual Studio Code).
3. **Importante:** Al ser un proyecto Front-End, no requiere instalación de dependencias de servidor.
4. Ejecutar el archivo `index.html` utilizando una extensión de servidor local (ej: Live Server) para asegurar la correcta carga de módulos y rutas relativas.

### Credenciales de Acceso
Para probar la aplicación, utilice las siguientes credenciales por defecto. No hay usuarios "predefinidos", por lo que cualquier mail y contraseña logrará un ingreso de sesión exitoso, debe tener en cuenta que el mail si debe ir en el formato correcto (con @ y dominio):
* **Correo:** admin@alkewallet.cl
* **Contraseña:** 123456

## Estructura del Código
El proyecto sigue una arquitectura separada por responsabilidades para facilitar el mantenimiento y la escalabilidad del front-end:

* **index.html:** Pantalla de bienvenida y punto de acceso a la aplicación.
* **css/**: Contiene los archivos de estilo.
    * `styles.css`: Personalización de componentes, paleta de colores (tema morado/bancario) y ajustes de Bootstrap.
* **js/**: Directorio con la lógica de negocio y manipulación del DOM.
    * `baseDeDatos.js`: Simula la persistencia de datos (Mock Data). Contiene los objetos de usuario, cuentas y arrays de transacciones.
    * `login.js`: Gestiona la validación del formulario de ingreso y redirección.
    * `deposit.js`: Lógica para sumar fondos y validar entradas numéricas.
    * `sendmoney.js`: Controlador complejo que maneja la búsqueda de contactos, validación de saldo, ejecución de transferencias y feedback visual (modales).
    * `transactions.js`: Renderiza dinámicamente la tabla o lista de movimientos históricos.

## Tecnologías Utilizadas
* **HTML5:** Estructura semántica del contenido.
* **CSS3 / Bootstrap 5:** Maquetación, sistema de grillas y componentes visuales (Modales, Cards, Offcanvas).
* **JavaScript (ES6+) / jQuery:** Lógica de programación, manejo de eventos y manipulación del DOM.

## Desafíos Técnicos
Durante el desarrollo se abordaron y resolvieron los siguientes retos:
* **Persistencia de Estado:** Simulación de una base de datos utilizando objetos JavaScript para mantener la coherencia del saldo entre las diferentes páginas (Depósito, Transferencia, Menú).
* **Validación de Formularios:** Implementación de lógica defensiva para evitar transacciones con montos negativos, saldo insuficiente o campos vacíos.
* **Feedback al Usuario:** Desarrollo de un sistema de notificaciones no intrusivas (modales dinámicos) para confirmar operaciones exitosas o alertar errores, mejorando la UX.
* **Navegación Fluida:** Configuración de redirecciones automáticas post-operación para mantener un flujo de usuario natural.

## Demostración
Puede ver una demostración funcional del sistema y sus características en el siguiente enlace:
[Link directo a YouTube](https://youtu.be/xMDO3njm4YY)

---
**Autor:** Joaquina Pino
**Curso:** Python Full Stack - Módulo 2