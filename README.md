# 💰 CrediComunidad

> Sistema de gestión de solicitudes de crédito para fondos de empleados y natilleras.

![Status](https://img.shields.io/badge/Estado-En_Desarrollo-yellow)
![React](https://img.shields.io/badge/Frontend-React_JS-blue)
![License](https://img.shields.io/badge/Licencia-MIT-green)

## 📋 Propósito

**CrediComunidad** nace de la necesidad de digitalizar y organizar el proceso de préstamos en pequeñas comunidades financieras (fondos de empleados o natilleras barriales).

El propósito principal es eliminar la informalidad y el desorden generado por el uso de Excel y WhatsApp, ofreciendo una plataforma centralizada donde los socios pueden autogestionar sus solicitudes y los administradores pueden mantener un control transparente del flujo de caja.

---

## 🔭 Alcance del Proyecto

La aplicación es una **SPA (Single Page Application)** de complejidad media-baja, enfocada en la funcionalidad operativa de la gestión de créditos.

### Lo que INCLUYE:

- **Roles de Usuario:** Distinción clara entre Cliente (Socio) y Administrador.
- **Simulación de Backend:** Persistencia de datos simulada mediante `json-server`.
- **Gestión de Solicitudes:** Creación (POST), Lectura (GET) y Actualización de estado (PATCH).
- **Autenticación Simulada:** Validación de credenciales básicas contra el archivo JSON.

### Lo que NO INCLUYE:

- Integración con pasarelas de pago reales.
- Cálculos de interés compuesto complejos.
- Base de datos relacional real (SQL) en esta versión.
- Recuperación de contraseñas vía email.

---

## 🎯 Objetivos

1.  **Transparencia:** Permitir que el usuario final conozca el estado de su solicitud en tiempo real.
2.  **Eficiencia:** Reducir el tiempo que el administrador gasta revisando chats para aprobar préstamos.
3.  **Educativo:** Servir como proyecto base para la implementación de hooks de React (`useState`, `useEffect`) y enrutamiento dinámico.

---

## 🛠 Stack de Desarrollo

El proyecto está construido con tecnologías modernas del ecosistema JavaScript:

- **Core:** [React JS](https://react.dev/) (Vite)
- **Enrutamiento:** React Router Dom (v6)
- **Estilos:** CSS Modules / Tailwind CSS (Según configuración)
- **HTTP Client:** Fetch API / Axios
- **Backend Mock:** JSON Server
- **Control de Versiones:** Git & GitHub

---

## 🚀 Instalación y Ejecución

Sigue estos pasos para desplegar el proyecto en tu entorno local.

### 1. Clonar el repositorio

```bash
git clone [https://github.com/tu-usuario/credicomunidad.git](https://github.com/tu-usuario/credicomunidad.git)
cd credicomunidad
2. Instalar dependencias
Bash

npm install
3. Ejecutar el Backend Simulado
Es necesario correr el servidor fake en un puerto paralelo (ej. 3001) para servir los datos.

Bash

npm run server
# O el comando manual: npx json-server --watch db.json --port 3001
4. Ejecutar el Frontend
En una nueva terminal, inicia la aplicación de React.

Bash

npm run dev
La aplicación estará disponible en http://localhost:5173 (o el puerto que indique Vite).
```


## 🤝 Procesos de Colaboración

Sigue estos pasos para desplegar el proyecto en tu entorno local. 
Si deseas contribuir a este proyecto, por favor sigue los siguientes lineamientos para mantener el orden:

   - Ramas (Branching):

   - main: Versión estable y producción.

   - develop: Rama de integración para desarrollo.

   -  feature/nombre-funcionalidad: Para nuevas características.

   -  fix/nombre-error: Para corrección de bugs.

   -  Pull Requests:

   -  Asegúrate de que tu código no rompa la funcionalidad existente.

   - Describe claramente qué cambios realizaste en la descripción del PR.

   - Commits Semánticos:

   - Usa convenciones como: feat: agregar login, fix: corregir error en suma, docs: actualizar readme.