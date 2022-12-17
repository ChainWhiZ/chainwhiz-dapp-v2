import RenderStyledImage from 'components/image/renderstyledimage';
import { USER_DETAILS } from 'data/userdetails';
import {
  UserdetailsContainer,
  TableHeading,
  TableBody,
  TableContents,
  UserText,
  TotalText,
  DetailsText,
  RankText,
  User,
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
        <UserText>
          <p className="lptext">User Rank</p>
          <p className="mbtext">U.R</p>
          <RenderStyledImage
            className="polygon"
            src="/images/leaderboard/upsidetriangle.png"
          />
        </UserText>
        <DetailsText>Details</DetailsText>
        <RankText>
          <p>Rank</p>
          <RenderStyledImage
            className="polygonTwo"
            src="/images/leaderboard/upsidetriangle.png"
          />
        </RankText>
        <TotalText>TotalXP</TotalText>
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
      <User rank={rank}>{user.position}</User>
      <UserInformation>
        <UserImg>
          <RenderStyledImage className="user__img" src={user.image} />
        </UserImg>
        <Details>{user.address}</Details>
        <CopyAddress
          onClick={() => copyToClipboard(user.address)}
        >
          <RenderStyledImage
            className="copy"
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
