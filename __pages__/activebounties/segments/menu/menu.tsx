import RenderStyledImage from 'components/image/renderstyledimage';
import React from 'react';
import { MenuContainer, MenuActive, MenuCompleted } from './menu.styled';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuActive>
        <RenderStyledImage
          src="/images/active/colouredcheckmark.png"
          className="mark"
        />
        Active
      </MenuActive>
      <MenuCompleted>Completed</MenuCompleted>
    </MenuContainer>
  );
};

export default Menu;
