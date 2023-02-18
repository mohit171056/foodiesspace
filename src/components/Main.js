import React from 'react';
import Product from './Product';
import './product.css';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <div className='mainarea'>
    <main className="block col-2 cards">
      <h2>Products</h2><br/>
      <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
        {products.map((product) => (
       <a href={"#"+product.id}>{product.name}</a>
        ))}
    
  </div>
</div><br/><br/>
      
      <div className='column'>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
    </div>
  );
}

