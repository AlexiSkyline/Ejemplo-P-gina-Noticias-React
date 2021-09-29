import React, { useState } from 'react'

export const useSelect = (stateInicial, opciones) => {
    
    const [state, setState] = useState(stateInicial);
    
    const SelectNoticias = () => ( 
        <select
            className="browser-default"
            onChange={ e => setState( e.target.value ) }
        >
            <option value="">-- Seleccione --</option>
            { opciones.map( opcion => (
                    <option key={ opcion.value }  value={ opcion.value }>{ opcion.label }</option>
                ))
            }
        </select>
    );

    return [ state, SelectNoticias ];
}
