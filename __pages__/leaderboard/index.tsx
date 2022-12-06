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
  UserdetailsWrapper,
} from './leaderboard.styled';

const Leaderboard = () => {
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
            <input type="text" placeholder="Search your favourite contestant" />
          </Search>
          <Filter>
            <RenderStyledImage
              className="filter"
              src="/images/leaderboard/filter.png"
            />
          </Filter>
        </SearchAndFilter>
        <UserdetailsWrapper>
          <UserDetails />
        </UserdetailsWrapper>
      </LeaderboardWrapper>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
