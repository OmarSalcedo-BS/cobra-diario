const API_BASE = "http://localhost:3000/";

export let endopoints = {
    users: API_BASE + "users",
    request: API_BASE + "requests",
};

export const api = {
    
    getUsuarios: async () => {
        const response = await fetch(endopoints.users);
        if (!response.ok) throw new Error("Error al obtener usuarios");
        return await response.json();
    },


    getSolicitudes: async () => {
        const response = await fetch(endopoints.request);
        if (!response.ok) throw new Error("Error al obtener solicitudes");
        return await response.json();
    },


    crearSolicitud: async (datos) => {
        const response = await fetch(endopoints.request, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        });
        return await response.json();
    }
};

