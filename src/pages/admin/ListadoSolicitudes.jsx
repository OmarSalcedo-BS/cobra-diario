import { useEffect, useState } from "react";
import { endopoints } from "../../api/servicios";


function ListadoSolicitudes() {

    const [solicitudes, setSolicitudes] = useState([]);

    function getSolicitudes() {
        fetch(endopoints.request)
            .then((response) => response.json())
            .then((data) => {
                setSolicitudes(data);
            })
            .catch((error) => console.error("Error fetching solicitudes:", error));
    }

    useEffect(() => { getSolicitudes() }, []);




    return (
        <div>
            <h1>Solicitudes</h1>
            {
                solicitudes.map((solicitud) => (
                    <div>
                        <p>Monto: {solicitud.amount}</p>
                        <p>Motivo: {solicitud.reason}</p>
                        <p>Estado: {solicitud.status}</p>
                        <p>Fecha: {solicitud.date}</p>
                        <div>
                            <button>Aprobar</button>
                            <button>Rechazar</button>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default ListadoSolicitudes;