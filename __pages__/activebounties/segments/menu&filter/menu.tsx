import React from 'react';
import { MenuContainer, MenuActive, MenuCompleted } from './menu.styled';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuActive>
        Active
      </MenuActive>
      <MenuCompleted>
        Completed
      </MenuCompleted>
    </MenuContainer>
  )
}

export default Menu
