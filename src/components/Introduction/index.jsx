import React from 'react';

import CustomContainer from '../partials/CustomContainer';

import './styles.scss'

const Introduction = (props) => {

    return (
        <div className = "outerIntroduction" style = {{backgroundImage: `url(${require(`../assets/images/gaontruebackground.jpeg`)})`}}>
            <CustomContainer>
                <div className = "caption">
                    <p> Sabrosa comida coreana tradicional.
                        A partir del 11 de Nov. Atendemos en el local, 
                        con previo reserva, manteniendo con todas las prevencion sanitaria.
                    </p>
                </div>
            </CustomContainer>
        </div>
    );
}

export default Introduction;