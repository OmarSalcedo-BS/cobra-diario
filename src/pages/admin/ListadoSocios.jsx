import { useEffect, useState } from "react";
import { api } from "../../api/servicios";
import { Tarjetas } from "../../components/Tarjetas";
import "./ListadoSolicitudes.css";



function ListadoSocios() {

    const [socios, setSocios] = useState([]);
    useEffect(() => {
        api.getUsuarios().then(data => setSocios(data))
            .catch(error => console.log(error))
    }, []);


    return (
        <div>
            <h1>Listado de socios</h1>
            <div className="cards-grid">
                {
                    socios
                        .filter(socio => socio.role !== 'admin')
                        .map((socio, index) => {
                            const variants = ['default', 'success', 'info', 'warning'];
                            const variant = variants[index % variants.length];

                            return (
                                <Tarjetas
                                    key={socio.id}
                                    titulo="Socio"
                                    variant={variant}
                                    icono="👤"
                                    acciones={[
                                        {
                                            label: "Editar",
                                            variant: "warning",
                                            onClick: () => console.log('Editar', socio.id)
                                        },
                                        {
                                            label: "Eliminar",
                                            variant: "danger",
                                            onClick: () => console.log('Eliminar', socio.id)
                                        }
                                    ]}
                                >
                                    <p><strong>Nombre:</strong> {socio.name}</p>
                                    <p><strong>Correo:</strong> {socio.email}</p>
                                    <p><strong>Role:</strong> {socio.role}</p>
                                </Tarjetas>
                            );
                        })
                }
            </div>
        </div>
    );
}

export default ListadoSocios;
