// == Import npm
import React from 'react';


// == Import
import './productCard.scss';

// == Composant
const ProductCard = ({ productCard }) => (
  <div className="productCard__content">
    <p className="content__description">{description}</p>
  </div>
);


// == Export
export default ProductCard;
