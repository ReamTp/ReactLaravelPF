import React from 'react';
import './BuscadorTabla.scss';

export default function BuscadorTabla() {
    function buscar() {
        let tabla = document.getElementById('tabla');
        let searchText = document.getElementById('buscador').value.toLowerCase();

        for (let i = 1; i < tabla.rows.length; i++){
            let celdaFila = tabla.rows[i].getElementsByTagName('td');
            let found = false;

            for(let j = 0; j < celdaFila.length && !found; j++){
                let compararAncho = celdaFila[j].innerHTML.toLowerCase();

                if(searchText.length == 0  || (compararAncho.indexOf(searchText) > -1)){
                    found = true;
                }
            }

            if(found){
                tabla.rows[i].style.display = '';
            } else {
                tabla.rows[i].style.display = 'none';
            }
        }
    }

    return (
        <div id="bTabla">
            <label htmlFor="buscador">Buscar:</label>
            <input type="text" name="buscador" id="buscador" onKeyUp={buscar} />
        </div>
    )
}
