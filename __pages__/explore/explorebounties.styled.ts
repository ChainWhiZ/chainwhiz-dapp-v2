import styled from "styled-components";
import { GlobalInputWrapper } from "../post/tabs/tabs.styled";
import { devices } from "theme";

export const ExploreBountiesWrapper = styled.div`
  box-sizing: border-box;
  // background-image: url('/images/post/postbounty/postbountybg.png');
  background-repeat: no-repeat;
  background-position: center;

  position: relative;
  background-color: ${(props) => props.theme.colors.darkBlue};
  font-family: ${(props) => props.theme.fonts.primaryFont};
  background-image: url("/images/landing/helixes/BG-Postbounty.png");
  min-height: calc(100vh - 6.9376rem);
  background-size: cover;
  padding-top: 4.688rem;
  padding-bottom: 4.688rem;

  &::before {
    content: "";
    position: absolute;
    width: 10.5rem;
    height: 10.5rem;
    top: -5.313rem;
    left: 12.375rem;
    background: #d4ff1e;
    opacity: 0.4;
    filter: blur(6.25rem);
    border-radius: 50%;
    object-fit: cover;
    // background-size: 100%;
  }
`;

export const ExploreDisplay = styled.div`
  display: flex;
  justify-content: space-evenly;
  // align-items: center;
  color: #ffffff;
  // flex: 1;
`;

export const HackingWrapper = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const SubmissionWrapper = styled.div`
  .span {
    color: #d4ff1e;
    font-size: 1.25rem;

    &::before {
      content: "";
      display: inline-block;
      background-image: url("/images/exportbounty/clock.png");
      background-size: 100%;
      width: 1.067rem;
      height: 1.333rem;
      margin-right: 1.092rem;
    }
  }

  button {
    width: 28rem;
    height: 4.375rem;
    background: #d4ff1e;
    border: 2px solid #d4ff1e;
    border-radius: 10px;
    margin-top: 3.375rem;
    margin-bottom: 3.688rem;
    cursor: pointer;
  }
`;

export const GoBackButton = styled.button`
  // background: ${(props) => props.theme.colors.blueFade};
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  gap: 1.25rem;
  height: 3.125rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
  border-radius: 0.625rem;
  background: transparent;

  &::before {
    content: "";
    background-size: 100%;
    display: inline-block;
    background-image: url("/images/post/leftArrow.svg");
    height: 0.8125rem;
    width: 0.5019rem;
  }

  &:hover {
    opacity: 0.8;
  }
  ${devices.mobile} {
    display: none;
  }
`;

export const HaczepBtn = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 11px;
  p {
    width: 10.125rem;
    height: 2.625rem;
    background: #1e1c30;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 400;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DaysDisplay = styled.div`
  display: flex;
  width: 45.75rem;
  height: 7.625rem;
  background: #1e1c30;
  border-radius: 10px;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1.313rem;
  padding-left: 3.688rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;

  span {
    font-size: 2rem;
    color: #d4ff1e;
  }

  p {
    font-size: 1.125rem;
  }

  hr {
    height: 4.625rem;
    opacity: 0.2;
    gap: 4.938rem;
  }
`;

export const Reference = styled.div`
  width: 46.125rem;
  height: 21.938rem;
  background: #1e1c30;
  border-radius: 10px;
  margin-top: 1.938rem;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  padding-left: 3.313rem;
  padding-top: 2.375rem;
  padding-bottom: 2.688rem;

  h4 {
    font-size: 1.375rem;
  }

  span {
    font-size: 1.125rem;
    color: #d4ff1e;
    display: flex;
    align-items: center;
    margin-top: 0.438rem;

    &::before {
      content: "";
      background-size: 100%;
      display: inline-block;
      background-image: url("/images/exportbounty/globe.png");
      height: 1.25rem;
      width: 1.25rem;
      margin-right: 0.75rem;
    }
  }

  p {
    max-width: 39.625rem;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 27px;
    margin-top: 1.75rem;
  }

  small {
    font-size: 1.125rem;
    color: #d4ff1e;
    margin-top: 0.813rem;
  }
`;

export const Evaluation = styled.div`
  width: 46.125rem;
  height: 14.75rem;
  background: #1e1c30;
  border-radius: 10px;
  margin-top: 2.125rem;
  padding-top: 2.25rem;
  padding-left: 3.313rem;

  h4 {
    font-weight: 600;
    font-size: 1.375rem;
    margin-bottom: 1.375rem;
  }

  div {
    display: flex;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin-left: 0.438rem;
  }
`;

export const RewardsMatic = styled.div`
  width: 28.125rem;
  height: 29.438rem;
  background: #1e1c30;
  border-radius: 10px;
  margin-top: 1.25rem;
  padding-top: 2.813rem;

  hr {
    width: 22.563rem;
    opacity: 0.5;
    margin-top: 3rem;
    background-color: #898989;
  }
`;

export const Rewards = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2.75rem;

  h3 {
    font-size: 1.375rem;
    font-weight: 600;
    white-space: nowrap;
  }

  small {
    font-weight: 400;
    opacity: 0.5;
    font-weight: 1.125;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 3.438rem;
  }

  p {
    margin-top: 0.188rem;
    font-size: 1rem;
    font-weight: 400;
  }

  i {
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: end;

    &::after {
      content: "";
      background-image: url("/images/exportbounty/bird.png");
      background-size: 100%;
      width: 9.799rem;
      height: 8.063rem;
      margin-top: 3.063rem;
      display: block;
    }
  }
`;

export const Matic = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2.75rem;
  text-align: right;

  p{
    font-size: 1rem;
    font-weight: 600;
    margin-top: 2.688rem;
  }

  h3{
    font-size: 1.875;
    font-weight: 400;
    margin-top: 2rem;
  }

  small{
    font-size: 1.125rem;
    font-weight: 300;
  }
`;

export const Bounty = styled.div`
  width: 28.125rem;
  height: 14.063rem;
  background: #1e1c30;
  border-radius: 10px;
  padding-left: 2.938rem;
  padding-top: 2.625rem;
  display: flex;

  section{
    margin-left: 1.563rem;
  }

  p{
    font-size: 1.375;
    font-weight: 600;

    &::after{
      content: '';
      background-image: url('/images/exportbounty/zscore.png');
      width: 4.688rem;
      height: 4.688rem;
      background-size: 100%;
      display: block;
      margin-top: 1.625rem;
    }
  }

  h3{
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 2.75rem;
  }

  div{
    display: flex;
    margin-top: 0.75rem;
    gap: 0.914rem;
    
    .fb{
      width: 1.096rem;
      height: 1.096rem;
    }

    .discord {
      width: 1.279rem;
      height: 1.096rem;
    }

    .twitter{
      width: 1.37rem;
      height: 1.188rem;
    }
  }

  Image{
    background: yellow;
    background-size: 100%;
  }
`;
