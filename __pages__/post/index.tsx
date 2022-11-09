import useBasicDetails from 'hooks/createpost/usebasicdetails';
import useCreatePost from 'hooks/createpost/usebasicdetails';
import React, { useEffect, useState } from 'react';
import theme from 'theme';
import {
  CreatePostWrapper,
  CreatePostTextContent,
  CreatePostBreadcrumb,
  CreatePostHeader,
  CreatePostAction,
  CreatePostContent,
  ActionButton,
  GoBackButton,
  CreatePost,
  CreatePostTabs,
  TabDesktop,
  TabMobile,
  BackButton
} from './post.styled';
import BasicDetailsTab from './tabs/basicdetails';
import BountyCriteriaTab from './tabs/bountycriteria';

const DEFAULT_BREAKCRUMBS = ['Home', 'Post a bounty'];
const CREATE_POST_TABS = [
  'Enter basic details',
  'Add bounty criterias',
  'Rewards & Voting',
  'Finish creating bounty',
];
const ALL_TABS = [
  BasicDetailsTab,
  BountyCriteriaTab,
  BountyCriteriaTab,
  BountyCriteriaTab,
];

export default function Post() {
  const [crumbs, setCrumbs] = useState(DEFAULT_BREAKCRUMBS);
  const [activeTab, setActiveTab] = useState(0);

  const basicDetailsState = useBasicDetails();
  const { isCompleted: basicDetailsIsCompleted = false } = basicDetailsState;
  const tabsFilledStatus = [basicDetailsIsCompleted, false, false, false];

  useEffect(() => {
    setCrumbs([...DEFAULT_BREAKCRUMBS, CREATE_POST_TABS[activeTab]]);
  }, [activeTab]);

  const resetState = () => {
    console.log('reset state');
  };

  const proceed = () => {
    if (tabsFilledStatus[activeTab]) {
      setActiveTab((a) => a + 1);
    } else {
      // TODO notify that the form is incomplete
    }
  };

  const CurrentTab = ALL_TABS[activeTab];

  return (
    <CreatePostWrapper>
      <CreatePost>
        <CreatePostHeader>
          <GoBackButton>
            <span>Back</span>
          </GoBackButton>
          <CreatePostTextContent>
            <h3>Let&apos;s Post a Bounty!</h3>
            <CreatePostBreadcrumb>
              {crumbs.map((crumb, index) => (
                <span key={index}>{crumb} </span>
              ))}
            </CreatePostBreadcrumb>
          </CreatePostTextContent>
          <p></p>
        </CreatePostHeader>

        <CreatePostTabs>
          {CREATE_POST_TABS.map((oneTab, index) => (
            <TabDesktop
              data-index={index}
              active={activeTab === index}
              filled={tabsFilledStatus[index]}
              onClick={() => setActiveTab(index)}
              key={oneTab}
            >
              <span>{oneTab}</span>
            </TabDesktop>
          ))}
          <TabMobile active>{CREATE_POST_TABS[activeTab]}</TabMobile>
        </CreatePostTabs>

        <CreatePostContent>
          <CurrentTab basicDetails={basicDetailsState} />
        </CreatePostContent>

        <CreatePostAction>
          <BackButton>Back</BackButton>
          <ActionButton onClick={resetState} variant="neon">
            Reset
          </ActionButton>
          <ActionButton onClick={proceed} variant="grey">
            Continue
          </ActionButton>
        </CreatePostAction>
      </CreatePost>
    </CreatePostWrapper>
  );
}
