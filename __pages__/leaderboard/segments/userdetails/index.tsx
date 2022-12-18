import RenderStyledImage from 'components/image/renderstyledimage';
import { USER_DETAILS } from 'data/userdetails';
import {
  UserdetailsContainer,
  TableHeading,
  TableBody,
  TableContents,
  UserHeading,
  TotalHeading,
  DetailsHeading,
  RankHeading,
  UserRank,
  UserInformation,
  Details,
  CopyAddress,
  UserImg,
  Rank,
  Total,
} from './userdetails.styled';
import { copyToClipboard } from 'utils';

const UserDetails = () => {
  return (
    <UserdetailsContainer>

      <TableHeading>
        <UserHeading>
          <p className="lptext">User Rank</p>
          <p className="mbtext">U.R</p>
          <RenderStyledImage
            className="polygon"
            src="/images/leaderboard/upsidetriangle.png"
          />
        </UserHeading>
        <DetailsHeading>Details</DetailsHeading>
        <RankHeading>
          <p>Rank</p>
          <RenderStyledImage
            className="polygonTwo"
            src="/images/leaderboard/upsidetriangle.png"
          />
        </RankHeading>
        <TotalHeading>TotalXP</TotalHeading>
      </TableHeading>

      <TableBody>
        {USER_DETAILS.map((user, i) => (
          <LeaderboardItem user={user} rank={i + 1} key={i} />
        ))}
      </TableBody>
    </UserdetailsContainer>
  );
};

//eslint-disable-next-line @typescript-eslint/no-explicit-any
function LeaderboardItem({ user, rank }: { user: any; rank: number }) {
  return (
    <TableContents>
      <UserRank rank={rank}>{user.position}</UserRank>
      <UserInformation>
        <UserImg>
          <RenderStyledImage className="user__img" src={user.image} />
        </UserImg>
        <Details>{user.address}</Details>
        <CopyAddress onClick={() => copyToClipboard(user.address)}>
          <RenderStyledImage
            className="leaderboard__copy"
            src="/images/leaderboard/copy.png"
          />
        </CopyAddress>
      </UserInformation>
      <Rank>{user.rank}</Rank>
      <Total>{user.totalxp}</Total>
    </TableContents>
  );
}

export default UserDetails;
