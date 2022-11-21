import { TOKEN_DROPDOWN_ITEMS } from 'data';
import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import {
  DropdownHeader,
  DropdownItem,
  DropdownWrapper,
} from './dropdown.styled';

export default function Dropdown({
  active,
  setActive,
  size = 'large',
}: {
  active: string;
  setActive: (newValue: string) => void;
  size?: string;
}) {
  const ddRef = useRef(null);
  const [ddOpen, setddOpen] = useState(false);
  const extraStyle = { display: ddOpen ? 'flex' : 'none' };
  useClickAway(ddRef, () => {
    setddOpen(false);
  });
  return (
    <DropdownWrapper>
      <DropdownHeader
        size={size}
        active={ddOpen}
        onClick={() => setddOpen(true)}
      >
        <span>{active === '' ? 'Select token' : active}</span>
      </DropdownHeader>
      <section style={extraStyle} ref={ddRef}>
        {TOKEN_DROPDOWN_ITEMS.map((dditem, index) => (
          <DropdownItem
            onClick={() => {
              setActive(dditem), setddOpen(false);
            }}
            active={active == dditem}
            key={index}
          >
            {dditem}
          </DropdownItem>
        ))}
      </section>
    </DropdownWrapper>
  );
}
