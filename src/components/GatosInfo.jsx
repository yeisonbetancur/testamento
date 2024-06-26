import React, { useState } from "react";
import '../css/GatosInfo.css';

function GatosInfo(props) {
    return (
        <div className="contenedor-testimonio entrada">
            <img className='imagen-testimonio'
                src={require(`../images/img-${props.imagen}.png`)}
                alt='cat picture'
            />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en <strong>{props.pais}</strong>
                    </p>
                <p className='cargo-testimonio'>
                    {props.cargo} en {props.empresa}
                    </p>
                <p className='texto-testimonio'>
                    "{props.testimonio}"
                    </p>
            </div>
        </div>
    );
}

export default GatosInfo;