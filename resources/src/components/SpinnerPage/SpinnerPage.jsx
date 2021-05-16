import React from 'react';
import { SpinnerInfinity } from "spinners-react";
import './SpinnerPage.scss';

export default function SpinnerPage() {
    return (
        <div id='spinnerPage'>
            <SpinnerInfinity size='5%' />
            <p>Cargando...</p>
        </div>
    )
}
