import { useEffect, useState } from "react";
import { api } from "../../api/servicios";
import { Tarjetas } from "../../components/Tarjetas";
import { obtenerDeLocalStorage } from "../../utils/local-storage";
import "./ListadoSolicitudes.css";


function ListadoSolicitudes() {
    const usuario = obtenerDeLocalStorage("usuario");
    const [solicitudes, setSolicitudes] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        api.getSolicitudes().then(data => setSolicitudes(data))
            .catch(error => console.log(error))
        api.getUsuarios().then(data => setUsuarios(data))
            .catch(error => console.log(error))
    }, []);


    return (
        <div className="container">
            <h1>Solicitudes de Préstamo</h1>
            <div className="cards-grid">
                {
                    usuario.role === "admin" ? (
                        solicitudes.map((solicitud, index) => {

                            const variants = ['default', 'success', 'info', 'warning'];
                            const variant = variants[index % variants.length];
                            const usuarioEncontrado = usuarios.find(u => u.id === solicitud.userId);
                            const nombreUsuario = usuarioEncontrado?.name || 'Usuario desconocido';

                            return (
                                <Tarjetas
                                    key={solicitud.id}
                                    titulo="Solicitud de Préstamo"
                                    variant={variant}
                                    icono="💰"
                                    acciones={[
                                        {
                                            label: "Aprobar",
                                            variant: "success",
                                            onClick: () => console.log('Aprobar', solicitud.id)
                                        },
                                        {
                                            label: "Rechazar",
                                            variant: "danger",
                                            onClick: () => console.log('Rechazar', solicitud.id)
                                        }
                                    ]}
                                >
                                    <p><strong>Usuario:</strong> {nombreUsuario}</p>
                                    <p><strong>Monto:</strong> ${solicitud.amount}</p>
                                    <p><strong>Motivo:</strong> {solicitud.reason}</p>
                                    <p><strong>Estado:</strong> {solicitud.status}</p>
                                    <p><strong>Fecha:</strong> {solicitud.date}</p>
                                </Tarjetas>
                            );
                        })
                    ) : (
                        <button className="card-button primary">Crear solicitud</button>
                    )
                }
            </div>
        </div>
    );
}

export default ListadoSolicitudes;