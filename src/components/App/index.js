// == Import npm
import React from 'react';

// We import the data
import data from 'src/data/data.json';


// == Import
import './styles.scss';

// == Composant
const App = () => {
// Here I parse the array of strings and construct Objects instead, with keys and values that were asked.
  const dataParsed = data.map(eachString => { return {T: eachString.charAt(6), PLU: parseInt( eachString.substring(12, 16)), CM: eachString.substring(eachString.lastIndexOf("M:") + 2, eachString.lastIndexOf("_VA")), VA: eachString.substring(eachString.lastIndexOf("VA:") + 3, eachString.lastIndexOf("_C:")) };});

  return (
    <div className="app">
      <h1>Liste des produits</h1>
   
   <div className="productList">
{/* Displaying of the products*/}
{dataParsed.map((productCard, i) => {
      return (
        <ul key={i}>
          <li>Type: {productCard.T}</li>
          <li>Type: {productCard.PLU}</li>
          <li>Type: {productCard.CM}</li>
          <li>Type: {productCard.VA}</li>
        </ul>
    )})}
   </div>

  </div>
);
};

// == Export
export default App;
