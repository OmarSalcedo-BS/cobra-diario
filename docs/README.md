# Especificación de Requisitos de Software (SRS)
## Proyecto: CrediComunidad (Gestión de Créditos)

**Versión:** 1.0  
**Fecha:** 19 de Noviembre de 2025  
**Analista:** IA Assistant (Gemini)

---

## 1. Descripción del Problema (Necesidad Real)
Actualmente, el fondo de empleados o grupo de ahorro local ("Natillera") gestiona las solicitudes de crédito de manera informal mediante **mensajes de WhatsApp y una hoja de cálculo de Excel**.

**Puntos de dolor:**
* El administrador pierde el control de quién solicitó dinero y en qué fecha.
* Los socios no tienen visibilidad del estado de su solicitud (si fue aprobada o rechazada) sin preguntar constantemente.
* No existe un historial centralizado y accesible de los movimientos.

## 2. Solución Propuesta
Desarrollar una aplicación web (SPA) utilizando **React JS** que centralice el proceso. Los socios podrán registrar sus solicitudes en la web y el administrador podrá gestionar (aprobar/rechazar) dichas peticiones desde un panel de control.

El Backend será simulado utilizando **json-server** para permitir una interacción completa (CRUD) sin necesidad de configurar una base de datos real en esta fase.

---

## 3. Actores del Sistema

| Actor | Descripción |
| :--- | :--- |
| **Cliente Final (Socio)** | Persona que pertenece a la comunidad y requiere solicitar un préstamo. |
| **Administrador (Tesorero)** | Encargado de revisar las solicitudes y decidir si se desembolsa el dinero o no. |

---

## 4. Requisitos Funcionales

### 4.1 Módulo de Autenticación (Simulado)
* **RF-01:** El sistema debe permitir ingresar seleccionando un usuario preexistente (Simulación de Login).
* **RF-02:** El sistema debe identificar el rol del usuario (`admin` o `client`) para redirigirlo a su vista correspondiente.

### 4.2 Módulo del Cliente (Socio)
* **RF-03 - Crear Solicitud:** El cliente debe poder llenar un formulario con: *Monto*, *Plazo (meses)* y *Motivo del préstamo*.
* **RF-04 - Ver Historial:** El cliente debe visualizar un listado de sus solicitudes pasadas y actuales.
* **RF-05 - Visualizar Estado:** Cada solicitud debe mostrar claramente su estado mediante colores o etiquetas: *Pendiente*, *Aprobada*, *Rechazada*.

### 4.3 Módulo del Administrador
* **RF-06 - Dashboard:** El administrador debe ver una lista general de **todas** las solicitudes de todos los usuarios.
* **RF-07 - Filtrado:** (Opcional) El administrador debería poder ver fácilmente las solicitudes que están en estado "Pendiente".
* **RF-08 - Gestionar Solicitud:** El administrador debe tener la capacidad de cambiar el estado de una solicitud de "Pendiente" a "Aprobada" o "Rechazada".

---

## 5. Requisitos Técnicos y Stack

* **Frontend:** React JS (Vite o CRA).
* **Estilizado:** CSS Modules o Tailwind (a elección del desarrollador).
* **Enrutamiento:** `react-router-dom` (v6+).
* **Manejo de Estado:** `useState` y `useEffect`.
* **Persistencia de Datos:** `json-server` (Fake REST API).
* **Control de Versiones:** Git / GitHub.

### Mapeo de Conceptos a Enseñar

| Requisito | Concepto React / JS |
| :--- | :--- |
| Carga de datos inicial | `useEffect` + `fetch/axios` (GET) |
| Guardar datos del formulario | `useState` (Controlled Inputs) |
| Enviar solicitud | `fetch` (POST) |
| Aprobar/Rechazar solicitud | `fetch` (PATCH) para actualizar solo el estado |
| Navegación entre Login y App | `react-router-dom` (`<Routes>`, `<Navigate>`) |
| Renderizado de listas | Método `.map()` de los Arrays |

---

## 6. Modelo de Datos (db.json)

Estructura relacional sugerida para el archivo `db.json`:

```json
{
  "users": [
    { 
      "id": "1", 
      "name": "Jaime Zapata", 
      "role": "admin", 
      "email": "admin@credi.com" 
    },
    { 
      "id": "2", 
      "name": "Estudiante Demo", 
      "role": "client", 
      "email": "user@credi.com" 
    }
  ],
  "requests": [
    {
      "id": "a1b2",
      "userId": "2",
      "amount": 500000,
      "installments": 6,
      "reason": "Compra de materiales",
      "status": "pending",
      "date": "2024-11-19"
    },
    {
      "id": "c3d4",
      "userId": "2",
      "amount": 200000,
      "installments": 2,
      "reason": "Emergencia médica",
      "status": "approved",
      "date": "2024-11-10"
    }
  ]
}