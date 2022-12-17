import { useRef, useState } from 'react';
import RenderStyledImage from 'components/image/renderstyledimage';
import UserDetails from './segments/userdetails';
import {
  LeaderboardContainer,
  LeaderboardWrapper,
  LeaderBoardLogo,
  LogoImgOne,
  LogoText,
  LogoImgTwo,
  Subheading,
  Search,
  SearchAndFilter,
  Filter,
  Dropdown,
  UserdetailsWrapper,
  FilterWrapper,
} from './leaderboard.styled';
import FilterDropdown from './segments/userdetails/filterDropdown';
import { useClickAway } from 'react-use';

const Leaderboard = () => {
  const [open, setOpen] = useState(false);
  const ddRef = useRef(null);

  useClickAway(ddRef, () => {
    setOpen(false);
  });

  return (
    <LeaderboardContainer>
      <LeaderboardWrapper>
        <LeaderBoardLogo>
          <LogoImgOne>
            <RenderStyledImage
              className="ball"
              src="/images/leaderboard/ball.png"
            />
            <RenderStyledImage
              className="left__wave"
              src="/images/leaderboard/leftwave.png"
            />
          </LogoImgOne>
          <LogoText>Leaderboard</LogoText>
          <LogoImgTwo>
            <RenderStyledImage
              className="right__wave"
              src="/images/leaderboard/rightwave.png"
            />
          </LogoImgTwo>
        </LeaderBoardLogo>

        <Subheading>Find our top-gainers of the year</Subheading>
        <SearchAndFilter>
          <Search>
            <RenderStyledImage
              className="search"
              src="/images/leaderboard/search.png"
            />
            <input
              type="text"
              className="input"
              placeholder="Search your favourite contestant"
            />
          </Search>
          <FilterWrapper>
            <Filter onClick={() => setOpen(true)}>
              <RenderStyledImage
                className="filter"
                src="/images/leaderboard/filter.png"
              />
            </Filter>
            <Dropdown ref={ddRef} open={open}>
              <FilterDropdown />
            </Dropdown>
          </FilterWrapper>
        </SearchAndFilter>

        <UserdetailsWrapper>
          <UserDetails />
        </UserdetailsWrapper>
      </LeaderboardWrapper>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
