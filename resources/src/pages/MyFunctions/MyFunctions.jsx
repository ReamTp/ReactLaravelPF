import React from 'react';
import BarraLateral from '../../components/BarraLateral/BarraLateral';
import './MyFunctions.scss';

export default function MyFunctions(props) {
    const {nivel} = props;
    
    return (
        <>
            <BarraLateral nivel={nivel} />
        </>
    )
}
