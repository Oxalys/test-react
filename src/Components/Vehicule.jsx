import React from 'react';


const Vehicule = (props) => {


    return(
        <div className={props.etat === "non validé" ? "border border-danger" : ""} >{props.nom}, {props.année}, {props.couleur},             {props.carburant}, {props.etat}
        </div>
    )
}


export default Vehicule;