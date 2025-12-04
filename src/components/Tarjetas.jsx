import "./Tarjetas.css";

export const Tarjetas = ({
    titulo,
    children,
    icono,
    acciones,
    variant = "default"
}) => {
    return (
        <div className={`card-container card-${variant}`}>
            <div className="card-header">
                {icono && <div className="card-icon">{icono}</div>}
                <h3 className="card-title">{titulo}</h3>
            </div>

            <div className="card-content">
                {children}
            </div>

            {acciones && acciones.length > 0 && (
                <div className="card-actions">
                    {acciones.map((accion, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`card-button ${accion.variant || 'primary'}`}
                            onClick={accion.onClick}
                        >
                            {accion.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};