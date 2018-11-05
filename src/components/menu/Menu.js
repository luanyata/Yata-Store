import React from 'react';
import './Menu.css'

function Menu(props) {

  let { categories, selectCategory } = props;
  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category.id}><button onClick={() => { selectCategory(category.id) }}>{category.name}</button></li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu;