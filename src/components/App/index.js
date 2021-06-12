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
    {data.map((productCard) => {
      return (
      productCard
      )})}
  </div>
);

// == Export
export default App;
