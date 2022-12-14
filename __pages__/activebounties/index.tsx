import React, { useState } from 'react';
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
  VotesBox,
  Doodle,
  DoodleText,
  // All,
} from './activebounties.styled';
import RenderStyledImage from 'components/image/renderstyledimage';
import ActiveVoteComponent from './segments/activevotes';
import SearchFilter from './segments/menu&filter/ActiveFilter';
import ActiveVoteMenu from './segments/menu&filter/menu';

const ActiveBounty = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const clickmenu = () => {
    setOpenMenu(!openMenu);
  };

  const clickfilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <ActiveBountiesContainer>
      <ActiveTop>
        <ActiveHeading>
          <ActiveMenu>
            <Heading>Explore Bounties </Heading>
            <Active onClick={clickmenu}>
              <p>Active</p>
              <RenderStyledImage
                src="/images/active/menu.png"
                className="active__img"
              />
              {openMenu && <ActiveVoteMenu />}
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

          <ActiveFilter onClick={clickfilter}>
            {openFilter && <SearchFilter />}
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

      <VotesBox>
        <ActiveVoteComponent active={undefined} />
      </VotesBox>

      <Doodle>
        <RenderStyledImage
          src="/images/active/fly.png"
          className="doodle_logo"
        />
        <DoodleText>
          Reached the very end? Let's take a journey to the center of the world!
        </DoodleText>
      </Doodle>
    </ActiveBountiesContainer>
  );
};

export default ActiveBounty;
