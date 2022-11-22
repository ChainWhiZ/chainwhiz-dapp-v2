import styled from 'styled-components';
import { devices } from 'theme';

// ---- wrappers section
export const CreatePostWrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.darkBlue};
  font-family: ${(props) => props.theme.fonts.primaryFont};
  background-image: url('/images/landing/helixes/BG-Postbounty.png');
  min-height: calc(100vh - 6.9376rem);
  background-size: cover;


  ${devices.mobile} {
    min-height: calc(100vh - 4.25rem);
    background-image: none;
    background-color: #171422;
    padding-bottom: 5.5325rem;
  }

  &::before {
    content: '';
    position: absolute;
    background: #ffffff;

    top: -15.625rem;
    left: calc(50vw - 9.8125rem);
    width: 19.625rem;
    height: 19.625rem;
    opacity: 0.2;
    filter: blur(6.25rem);

    ${devices.mobile} {
      width: 8.375rem;
      height: 8.375rem;
      top: -1.25rem;
      left: calc(50vw - 4.1875rem);
    }
  }
`;

export const CreatePost = styled.div`
  width: 89.375rem;
  margin: auto;
  padding-top: 3.625rem;
  padding-bottom: 6.25rem;


  ${devices.mobile} {
    width: fit-content;
    padding-top: 9rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-bottom: 0;
  }
`;

// ----- header section
export const CreatePostTextContent = styled.div`

  h3 {
    color: white;
    text-align: center;
    font-size: 2.5rem;
    line-height: 3.75rem;
    margin-bottom: 0.5rem;
    width: 33.875rem;
    ${devices.mobile} {
      text-align: center;
      width: fit-content;
      font-size: 1.25rem;
      line-height: 1.25rem;
      margin: auto;
      margin-bottom: 0.3125rem;
    }
  }
`;

export const CreatePostHeader = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  gap: 20.4375rem;
  margin-bottom: 3.5625rem;

  ${devices.mobile} {
    justify-content: center;

    margin-bottom: 1.875rem;
    p {
      display: none;
      margin-bottom: 1.875rem;
      gap: unset;
    }
  }
`;

export const GoBackButton = styled.button`
  background: ${(props) => props.theme.colors.blueFade};
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  gap: 1.25rem;
  padding: 0.625rem 1.25rem;
  height: 3.125rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
  border-radius: 0.625rem;

  &::before {
    content: '';
    background-size: 100%;
    display: inline-block;
    background-image: url('/images/post/leftArrow.svg');
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

export const CreatePostBreadcrumb = styled.div`
  width: fit-content;
  margin: auto;

  span {
    transition: ${(props) => props.theme.meta.fastTransitionSpeed};
    color: ${(props) => props.theme.colors.lightGrey};
    font-family: ${(props) => props.theme.fonts.primaryFontMedium};
    cursor: pointer;
    font-size: 1rem;
    line-height: 1.5rem;

    ${devices.mobile} {
      font-size: 0.625rem;
      line-height: 0.75rem;
    }

    &:hover {
      color: white;
      &:last-of-type {
        color: ${(props) => props.theme.colors.lightGrey};
      }
    }
    &::before {
      content: '> ';
    }
    &:first-of-type {
      &::before {
        display: none;
      }
    }
  }
`;

// ----- tabs section
export const CreatePostTabs = styled.div`
  display: flex;
  gap: 2.1875rem;
  padding-left: 1.6875rem;
  padding-right: 1.6875rem;
  

  ${devices.mobile} {
    padding: 0;
    grid-template-columns: unset;
  }
`;

export const SectionTab = styled.div<{ active?: boolean; filled?: boolean }>`
  background: ${(props) => props.theme.colors.blueFade};
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  cursor: pointer;
  color: #a08f8f;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.125rem solid transparent;

  border-radius: 1.25rem;
  height: 4.0625rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
  &[data-index='0'] {
    width: 21.75rem;
  }
  &[data-index='1'] {
    width: 18.5rem;
  }
  &[data-index='2'] {
    width: 21.75rem;
  }
  &[data-index='3'] {
    width: 20.375rem;
  }
  &:hover {
    opacity: 0.9;
  }

  ${({ active }) =>
    active &&
    `
    border-color: white;
    color: white;
  `}

  ${({ filled }) =>
    filled &&
    `
    border-color: #D4FF1E;
    color: white;
  `}
`;

export const TabDesktop = styled(SectionTab)`
  ${devices.mobile} {
    display: none;
  }
`;

export const TabMobile = styled(SectionTab)`
  display: none;
  ${devices.mobile} {
    display: flex;
    color: white;
    gap: 0.75rem;
    font-size: 1rem;
    height: 4.125rem;
    width: 20.0625rem;
    line-height: 1.5rem;
    border-radius: 0.625rem;

    &::after {
      content: '';
      display: block;
      background-size: cover;
      background-image: url('/images/post/tabdd.svg');
      height: 1.25rem;
      width: 1.25rem;
    }
  }
`;

export const CreatePostContent = styled.div`
  background: #1f1e2b;
  border-radius: .625rem;
  position: relative;
  margin-top: 2.8125rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 13.625rem;
    height: 13.625rem;
    background: #d4ff1e;
    border-radius: 50%;
    opacity: 0.1;
    bottom: -5rem;
    right: -6.25rem;
    object-fit: contain;
    filter: blur(6.25rem);
  }

  ${devices.mobile} {
    background: transparent;
    border-radius: 0;
    margin-top: 0;
    &::after {
      display: none;
    }
  }
`;

export const CreatePostAction = styled.div<{ hidden?: boolean }>`
  position: relative;
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  justify-content: flex-end;
  gap: 1.25rem;
  margin-top: 2.9375rem;
  align-items: center;
  ${devices.mobile} {
    gap: 1.3125rem;
    margin-top: 2.1875rem;
  }
`;

export const BackButton = styled.div`
  display: none;
  left: .1875rem;
  color: rgba(255, 255, 255, 0.95);
  position: absolute;
  font-weight: 300;
  align-items: center;
  cursor: pointer;

  font-size: 0.75rem;
  line-height: 1.3125rem;
  gap: 0.6875rem;

  &::before {
    content: '';
    height: 0.6044rem;
    width: 0.3731rem;
    background-image: url('/images/post/postleftarrow.svg');
    display: block;
  }

  ${devices.mobile} {
    display: flex;
  }
`;

export const ActionButton = styled.div<{ variant: 'grey' | 'neon' }>`
  width: fit-content;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === 'grey'
      ? props.theme.colors.neonGreen
      : props.theme.colors.postActionBlack};
  color: ${(props) =>
    props.variant === 'grey'
      ? props.theme.colors.darkGrey
      : props.theme.colors.white};
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  border-radius: 0.625rem;
  padding: 0.75rem 1.25rem;
  font-weight: 400;
  font-size: 1.125rem;

  ${devices.mobile} {
    padding: 0.515rem 0.8581rem;
    font-size: 0.7724rem;
    line-height: 1rem;
    border-radius: 0.1875rem;
  }
  &:hover {
    opacity: 0.8;
  }
`;
