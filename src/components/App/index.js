// == Import npm
import React from 'react';

// We import the data
import data from 'src/data/data.json';


// == Import
import './styles.scss';

// == Composant
const App = () => {
  // const parseCodeString = (code) => {{console.log("yo");}}
  /* return object */

  const dataParsed = data.map(eachString => { return {T: eachString.charAt(6), PLU: parseInt( eachString.substring(12, 16)), CM: eachString  }});
  console.log("my parsed Data is:", dataParsed);

  return (
  <div className="app">
  <h1>Liste des produits</h1>
    {/* Display of every product cards */}
   
{/* I tried Object.keys(data).map here, and it renders 0, 1, 2, etc. And if I do Object.values(data).map, it renders the GVC lines one by one (one GVC ref by list item). Si je comprends bien l'exo, il faudrait que j'ajoute des guillemes avant et après les underscore, que je supprime les underscore, et qu'ensuite je transforme les chiffres stringés en numbers. */}
  {dataParsed.map((productCard, i) => {
    return (
     <li key={i}>
      <span>{productCard}</span>
    </li>
   )})}
</div>
);
};

// == Export
export default App;
