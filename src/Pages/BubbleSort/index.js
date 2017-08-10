import React, {Component} from 'react';
import BubbleSortAnimation from './Components/BubbleSortAnimation/index.js';
class BubbleSort extends Component{
    render(){
        return(
            <div className="Section">
                <h1>Ordenamiento Burbuja</h1>
                <p>
                    Visualización sencilla. Descripción General

                    Visualizacion  detallada. Ahora vamos a explorar el código paso por paso. En una visualizacion separada.

                    Optimización. Terminar cuando no haya cambios en una pasada.

                    Nota:
                    Cuando se necesita comparar elementos no númericos, simplemente cambiamos la condición para decidir cual es "Mayor".

                    <BubbleSortAnimation/>
                </p>
            </div>
        )
    }
}

export default BubbleSort