import React, { Component } from 'react';

class Introduction extends Component {
    render() {
        return (
            <div className="Section">
                <h1>Introducción</h1>

                <p>
                    Las funciones de ordenamiento es una de las actividades esenciales de una computadora.
                    Las dos razones principales para ordenar són:
                    <ul>
                        <li>
                            Nos ayuda a que un grupo de datos sea más fácil de leer y ordenar
                        </li>
                        <li>
                            Facilita la búsqueda y recuperación de un elemento específico dentro de un grupo
                        </li>
                    </ul>

                </p>

                <p>
                    En éstos tiempos, la mayoría de los lenguajes y herramientas que utilizamos para crear programas y sistemas ya cuentan con funciones para ordenar elementos, por lo que es raramente necesario o incluso adecuado crear tu propio código o implementaciones de los algoritmos. Sin embargo, entender los algoritmos, y los conceptos que los rodean, es la diferencia entre un Chef, y alguien que simplemente sigue una receta.

                    Veamos algunos de los usos

                    Fechas
                    Partículas / 3D
                    Colores / Opacidad
                    Baraja
                    tamaños
                    Ordenamiento alfabético
                    Busqueda binaria
                    Búsqueda de duplicados
                    La posición de un elemento en la lista
                </p>


                Existen muchos algoritmos para lograr éstos propósitos, y la elección depende de:
                <ul>
                    <li>La cantidad de elementos a ordenar</li>
                    <li>Complejidad de tiempo vs memoria</li>
                    <li>La capacidad del dispositivo</li>
                    <li>La naturaleza de los elementos</li>
                    <li>Estabilidad</li>
                </ul>

                <h2>Intercambio de Elementos</h2>

                <p>
                Nota:
                Una operación muy común en muchos algoritmos es el intercambio de variables.
                En otras palabas, cuando queremos que la variable A tenga el valor de B y viceversa.
                La mayoría de los lenguajes de programación (con excepción de Python, y otros) no cuentan con un operador de intercambio, por lo que el intercambio se realiza en 3 pasos:

                codigo:
                <code>
                variableTemporal = A
                A = B
                B = Variable temporal
                </code>
                así, los valores terminan intercambiados.
                </p>

            </div>
        )
    }
}

export default Introduction