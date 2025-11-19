# Plan de Trabajo y Backlog: CrediComunidad

**Proyecto:** Aplicación de Gestión de Créditos  
**Duración Estimada:** 1 Sprint (1-2 Semanas)  
**Metodología:** Desarrollo Ágil simplificado

---

## 1. Cronograma de Trabajo (Fases)

Este cronograma está diseñado para construir la aplicación de manera incremental.

| Fase | Objetivo | Tareas Principales | Tiempo Est. |
| :--- | :--- | :--- | :--- |
| **Fase 0: Configuración** | Preparar el entorno y el Backend simulado. | • Configuración de Vite + React.<br>• Instalación de `json-server` y dependencias.<br>• Creación del `db.json`. | 1 Día |
| **Fase 1: Estructura Base** | Navegación y Autenticación simulada. | • Configuración de `react-router-dom`.<br>• Creación de Layouts (Navbar).<br>• Vista de Login (simulado). | 1-2 Días |
| **Fase 2: Módulo Cliente** | Permitir el ingreso de datos (Input). | • Formulario de Solicitud (`useState`).<br>• Envío de datos (POST).<br>• Listado de historial personal (`useEffect`). | 2-3 Días |
| **Fase 3: Módulo Admin** | Gestión y control de datos. | • Dashboard de solicitudes pendientes.<br>• Lógica de Aprobación/Rechazo (PATCH).<br>• Actualización de UI en tiempo real. | 2 Días |
| **Fase 4: Refinamiento** | Mejoras visuales y limpieza. | • Feedback visual (Alertas/Toasts).<br>• Estilos finales y corrección de bugs. | 1 Día |

---

## 2. Historias de Usuario (Product Backlog)

A continuación, se detallan las necesidades funcionales desde la perspectiva del usuario final.

### HU-01: Autenticación Simulada
**Como** usuario (cliente o admin),  
**Quiero** ingresar mi usuario o seleccionar mi perfil,  
**Para** acceder a las funciones correspondientes a mi rol.

* **Criterios de Aceptación:**
    * Debe existir un formulario o selector de usuarios.
    * Si el rol es `admin`, redirigir a `/admin/dashboard`.
    * Si el rol es `client`, redirigir a `/client/home`.
    * Guardar el usuario actual en `localStorage` o Context (para persistencia simple).

### HU-02: Solicitud de Crédito
**Como** cliente socio,  
**Quiero** llenar un formulario con el monto y motivo,  
**Para** solicitar un préstamo a la comunidad.

* **Criterios de Aceptación:**
    * Formulario con campos: Monto (Numérico), Plazo (Meses), Motivo (Texto).
    * El botón "Enviar" debe estar deshabilitado si el formulario está incompleto.
    * Al enviar, debe registrarse en `db.json` con estado inicial `pending`.
    * Debe mostrar un mensaje de éxito al finalizar.

### HU-03: Historial de Mis Solicitudes
**Como** cliente socio,  
**Quiero** ver una lista de mis préstamos anteriores,  
**Para** saber si me aprobaron el dinero o si sigo en espera.

* **Criterios de Aceptación:**
    * La lista debe filtrar solo las solicitudes que coincidan con mi `userId`.
    * Debe mostrar el estado con colores distintivos (Ej: Amarillo=Pendiente, Verde=Aprobado).
    * La lista se debe actualizar automáticamente si hago una nueva solicitud.

### HU-04: Gestión de Solicitudes (Admin)
**Como** administrador,  
**Quiero** ver todas las solicitudes pendientes y poder aprobarlas o rechazarlas,  
**Para** controlar la salida de dinero del fondo.

* **Criterios de Aceptación:**
    * Vista exclusiva para rol `admin`.
    * Debe listar todas las solicitudes con estado `pending`.
    * Cada solicitud debe tener dos botones: "Aprobar" y "Rechazar".
    * Al hacer clic, debe actualizar el estado en la base de datos sin recargar la página completa.

---

## 3. Tareas Técnicas (Sprint Backlog)

Desglose técnico para el desarrollador (Jaime/Estudiantes):

### Configuración
- [ ] Inicializar proyecto: `npm create vite@latest`
- [ ] Instalar librerías: `npm install react-router-dom json-server axios` (o fetch nativo)
- [ ] Crear script en `package.json` para correr el server: `"server": "json-server --watch db.json --port 3001"`

### Rutas y Contexto
- [ ] Definir rutas en `App.jsx`: `/`, `/login`, `/dashboard`, `/create-request`.
- [ ] Crear componente `PrivateRoute` para proteger la ruta de Admin.

### Componentes UI
- [ ] Crear `Navbar` (condicional según quien esté logueado).
- [ ] Crear `RequestCard` (Componente reutilizable para mostrar la info del préstamo).

### Lógica (Hooks)
- [ ] Implementar `useFetch` (Custom Hook opcional) o `useEffect` para traer datos.
- [ ] Implementar función `handleStatusChange(id, newStatus)` en el panel de Admin.