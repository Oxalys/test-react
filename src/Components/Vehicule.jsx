import React from 'react';


const Vehicule = (props) => {


    return(
        <div>{props.nom}, {props.année}, {props.couleur},             {props.carburant}, <div className={props.etat === "non validé" ? "border-bottom border-danger" : ""} >{props.etat}</div>
        </div>
    )
}


export default Vehicule;