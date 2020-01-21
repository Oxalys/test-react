import React from 'react';
import Garage from './Components/Garage';
import Vehicule from './Components/Vehicule';

function App() {
  return (
    <div>
      <Garage />
      <Vehicule nom="Mercedes Benz S 260" année="1991" couleur="bleue" carburant="essence" etat="non validé" />
      <Vehicule nom="Fiat 500" année="2010" couleur="noire" carburant="essence" etat="non validé" />
      <Vehicule nom="Volkswagen Crafter" année="2016" couleur="blanche" carburant="diesel" etat="validé" />
      <Vehicule nom="" année="" couleur="" carburant="" etat="" />
      <Vehicule nom="" année="" couleur="" carburant="" etat="" />
    
    </div>
  );
}

export default App;
