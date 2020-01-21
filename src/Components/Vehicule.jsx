import React from 'react';


const Vehicule = (props) => {
    return(
        <div>{props.nom}, {props.année}, {props.couleur}, {props.carburant}, {props.etat}</div>
    )
}


export default Vehicule;