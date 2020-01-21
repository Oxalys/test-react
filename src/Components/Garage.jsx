import React from 'react';
import Vehicule from './Vehicule';


const Garage = () => {
    return (
        <div>
            <Vehicule nom="Mercedes Benz S 260" année="1991" couleur="bleue" carburant="essence" etat="non validé" />
            <br/>
            <Vehicule nom="Fiat 500" année="2010" couleur="noire" carburant="essence" etat="non validé" />
            <br/>
            <Vehicule nom="Volkswagen Crafter" année="2016" couleur="blanche" carburant="diesel" etat="validé" />
            <br/>
            <Vehicule nom="BMV 114" année="2012" couleur="bleue" carburant="diesel" etat="non validé" />
            <br/>
            <Vehicule nom="Audi A3" année="2015" couleur="rouge" carburant="diesel" etat="validé" />
        </div>
    )
}


export default Garage;