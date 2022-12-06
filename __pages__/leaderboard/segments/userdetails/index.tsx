import RenderStyledImage from 'components/image/renderstyledimage';
import { USER_DETAILS } from 'data/userdetails';
import React from 'react';
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
  DetailsandImage,
  Details,
  UserImg,
  Rank,
  Total,
} from './userdetails.styled';

const UserDetails = () => {
  return (
    <UserdetailsContainer>
      <TableHeading>
        <UserText>User Rank</UserText>
        <DetailsText>Details</DetailsText>
        <RankText>Rank</RankText>
        <TotalText>TotalXP</TotalText>
      </TableHeading>
      <TableBody>
        {USER_DETAILS.map((user) => (
          <TableContents>
            <User>{user.numbers}</User>
            <DetailsandImage>
              <UserImg>
                <RenderStyledImage
                  className="user__img"
                  src={user.image}
                />
              </UserImg>
              <Details>{user.details}</Details>
            </DetailsandImage>
            <Rank>{user.rank}</Rank>
            <Total>{user.totalxp}</Total>
          </TableContents>
        ))}
      </TableBody>
    </UserdetailsContainer>
  );
};

export default UserDetails;
