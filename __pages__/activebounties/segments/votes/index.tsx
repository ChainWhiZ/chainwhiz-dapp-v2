import RenderGroupImages from 'components/image/rendergroupedimage';
import RenderStyledImage from 'components/image/renderstyledimage';
import React from 'react';
import {
  VoteContainer,
  VoteTopDisplay,
  VoteHr,
  VoteDownDisplay,
  TopLeft,
  TopRight,
  DownLeft,
  DownRight,
  VoteHeading,
  VoteDesc,
  VotingImage,
  GroupImages,
  VoteText,
  VoteDays,
  VoteMatic,
  Usd,
} from './votes.styled';

const Votes = ({ vote }: any) => {
  return (
    <VoteContainer>
      <VoteHr>
        <VoteTopDisplay>
          <TopLeft>
            <RenderStyledImage src={vote.polygonImg} className="polygon" />
            <VoteHeading>{vote.title}</VoteHeading>
            <VoteDesc>{vote.description}</VoteDesc>
          </TopLeft>

          <TopRight>
            <VotingImage>
              <RenderStyledImage src={vote.elipseImg} className="vote_logo" />
              <VoteText>{vote.vote}</VoteText>
            </VotingImage>
            <GroupImages>
            <RenderGroupImages
              images={vote.activeImage}
              imageClassName="active__images"
            />
            </GroupImages>
          </TopRight>
        </VoteTopDisplay>
      </VoteHr>
      {/* <hr className='hr' /> */}

      <VoteDownDisplay>
        <DownLeft>
          <VoteDays>{vote.daysLeft}</VoteDays>
        </DownLeft>

        <DownRight>
          <VoteMatic>{vote.amount}</VoteMatic>
          <Usd>{vote.usd}</Usd>
        </DownRight>
      </VoteDownDisplay>
    </VoteContainer>
  );
};

export default Votes;
