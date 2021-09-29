import React, { useState } from 'react'

export const useSelect = (stateInicial, opciones) => {
    
    const [state, setState] = useState('');
    
    const SelectNoticias = () => {
        <select
            className="browser-default"
        >
            <option value="">-- Seleccione --</option>
        </select>
    };

    return [ state, SelectNoticias ];
}
