import React from 'react'
import { useSelect } from '../hooks/useSelect';
import styles from './Formulario.module.css';

export const Formulario = () => {

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sport', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
    ];

    const [ categoria, SelectNoticias ] = useSelect( 'general', OPCIONES );
    return (
        <div className={`${ styles.buscador } row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={ styles.heading }>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={ `${ styles['btn-block'] } btn-large amber darken-2` }
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
