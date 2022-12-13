import React from 'react';
import {
  ActiveBountiesContainer,
  ActiveHeading,
  Heading,
  Active,
  ActiveTop,
  ActiveMenu,
  ActiveSearch,
  Immerse,
  ActiveInput,
  ActiveFilter,
  TopBounties,
  // All,
} from './Activebounties.styled';
import RenderStyledImage from 'components/image/renderstyledimage';

const ActiveBounty = () => {
  return (
    <ActiveBountiesContainer>
      <ActiveTop>
        <ActiveHeading>
          <ActiveMenu>
            <Heading>Explore Bounties </Heading>
            <Active>
              <p>Active</p>
              <RenderStyledImage
                src="/images/active/menu.png"
                className="active__img"
              />
            </Active>
          </ActiveMenu>
          <Immerse>
            Immerse yourself into the world of <span>bounties</span>
          </Immerse>
        </ActiveHeading>

        <ActiveSearch>
          <ActiveInput>
            <RenderStyledImage
              src="/images/active/search.png"
              className="active__search"
            />
            <input
              type="text"
              placeholder="Search your favorite bounties"
              className="active__input"
            />
          </ActiveInput>

          <ActiveFilter>
            <RenderStyledImage
              src="/images/active/filter.png"
              className="active__filter"
            />
          </ActiveFilter>
        </ActiveSearch>
      </ActiveTop>

      <TopBounties>
        <div>All</div>
        <div>Graphics design</div>
        <div>Animation</div>
        <div>SQL Development</div>
        <div>DBMS Strutures</div>
        <div>UI/UX Design</div>
        <div>data Entry</div>
      </TopBounties>
    </ActiveBountiesContainer>
  );
};

export default ActiveBounty;
