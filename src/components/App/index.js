// == Import npm
import React from 'react';

// We import the data
import data from 'src/data/data.json';


// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <h1>Liste des produits</h1>
      {/* Display of every product cards */}
     
     {/* { dataParsed = JSON.parse(data) }
     <p>{dataParsed}</p> */}

    {data.map((productCard, i) => {
      return (
       <li key={i}>
        <span>{productCard}</span>
      </li>
        
      )})}
  </div>
);

// == Export
export default App;
