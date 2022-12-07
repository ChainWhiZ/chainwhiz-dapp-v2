import styled from 'styled-components';
import { devices } from 'theme';

export const UserdetailsContainer = styled.div`
  background-color: #32313a;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  border-radius: 1.25rem;
  width: 99.5rem;
  /* height: 64.125rem; */
  padding-bottom: 1.25rem;
`;

export const TableHeading = styled.div`
  display: flex;
  align-items: center;
  background-color: #131313;
  color: #d4ff1e;

  border-radius: 0.625rem;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 3.75rem;
  width: 92rem;
  height: 4.125rem;
`;

export const UserText = styled.div`
  margin-left: 1.563rem;
  display: flex;
  align-items: center;

  .polygon{
    width: 0.875rem;
    height: 0.688rem;
    margin-left: 0.375rem;
  }
`;

export const DetailsText = styled.div`
  margin-left: 6.875rem;
`;

export const RankText = styled.div`
  margin-left: 31.875rem;
  display: flex;
  align-items: center;

  .polygonTwo{
    width: 0.875rem;
    height: 0.688rem;
    margin-left: 0.313rem;
  }
`;

export const TotalText = styled.div`
  margin-left: 15.188rem;
`;

export const TableBody = styled.div`
  color: #ffffff;

  `;

export const TableContents = styled.div`
  width: 91.875rem;
  height: 6.188rem;
  background-color: #1f1e2b;
  display: flex;
  align-items: center;

  border-radius: 0.625rem;
  margin-top: 1.313rem;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;

  font-size: 1.875rem;
  margin-left: 4.156rem;

  &::after {
    content: '';
    /* position: absolute; */
    background-image: url('/images/leaderboard/crown.png');
    background-size: 100%;
    width: 2.375rem;
    height: 1.438rem;
    margin-left: 1.156rem;
  }
`;

export const DetailsandImage = styled.div`
  display: flex;
  align-items: center;
`;

export const Details = styled.div`
  font-size: 1.25rem;
  margin-left: 1.188rem;

  &::after {
    content: '';
    position: absolute;
    background-image: url('/images/leaderboard/copy.png');
    background-size: 100%;
    width: 1rem;
    height: 1.25rem;
    margin-left: 0.813rem;
    margin-top: 0.2rem;
  }
`;

export const UserImg = styled.div`
  .user__img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    margin-left: 7.438rem;
  }
`;

export const Rank = styled.div`
  font-weight: 600;
  font-size: 1.25rem;

  margin-left: 12.875rem;
`;

export const Total = styled.div`
  color: #d4ff1e;

  font-size: 1.875rem;
  font-weight: 600;
  margin-left: 13.375rem;
`;
