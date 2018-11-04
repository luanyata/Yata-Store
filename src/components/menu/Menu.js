import React from 'react';
import './Menu.css'

function Menu(props) {

  let { categories } = props;
  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category.id}><a href="#load">{category.name}</a></li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu;