import { CREATE_POST_TABS, DEFAULT_BREAKCRUMBS } from 'data';
import useBasicDetails from 'hooks/createpost/usebasicdetails';
import useBountyCriteria from 'hooks/createpost/usebountycriteria';
import useRewardsAndVoting from 'hooks/createpost/userewardsandvoting';
import React, { useEffect, useState } from 'react';
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
  BackButton,
} from './post.styled';

// ----- import tabs
import BasicDetailsTab from './tabs/basicdetails';
import BountyCriteriaTab from './tabs/bountycriteria';
import RewardsAndVotingTab from './tabs/rewardsandvoting';
import ConfirmBounty from './tabs/confirmbounty';

const ALL_TABS = [
  BasicDetailsTab,
  BountyCriteriaTab,
  RewardsAndVotingTab,
  ConfirmBounty,
];

export default function Post() {
  const [crumbs, setCrumbs] = useState(DEFAULT_BREAKCRUMBS);
  const [activeTab, setActiveTab] = useState(0);

  // basic details state
  const basicDetailsState = useBasicDetails();
  const { isCompleted: basicDetailsIsCompleted = false } = basicDetailsState;
  // bounty criteria state
  const bountyCriteriaState = useBountyCriteria();
  const { isCompleted: bountyCriteriaIsCompleted = false } =
    bountyCriteriaState;
  // rewards and voting state
  const rewardsAndVotingState = useRewardsAndVoting();
  const { isCompleted: rewardsAndVotingCompleted = false } =
    rewardsAndVotingState;

  // tab filled state
  const tabsFilledStatus = [
    true,//basicDetailsIsCompleted,
    true,//bountyCriteriaIsCompleted,
    true,//rewardsAndVotingCompleted,
    false,
  ];

  useEffect(() => {
    setCrumbs([...DEFAULT_BREAKCRUMBS, CREATE_POST_TABS[activeTab]]);
  }, [activeTab]);

  const gotoTab = (index: number) => {
    // ensure all tabs before this one are filled before the user can proceed.
    const previousTabsFilled = tabsFilledStatus.slice(0, index).every(Boolean);
    if (previousTabsFilled) {
      setActiveTab(index);
    } else {
      // TODO use custom notification to ensure that the tab is navigated to
    }
  };

  const resetState = () => {
    console.log('reset function to be implemented shortly');
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
              onClick={() => gotoTab(index)}
              key={oneTab}
            >
              <span>{oneTab}</span>
            </TabDesktop>
          ))}
          <TabMobile active filled={tabsFilledStatus[activeTab]}>
            {CREATE_POST_TABS[activeTab]}
          </TabMobile>
        </CreatePostTabs>

        <CreatePostContent>
          <CurrentTab
            basicDetails={basicDetailsState}
            bountyCriteria={bountyCriteriaState}
            rewardsAndVoting={rewardsAndVotingState}
          />
        </CreatePostContent>

        <CreatePostAction hidden={activeTab === 3}>
          <BackButton onClick={() => gotoTab(activeTab - 1)}>Back</BackButton>
          <ActionButton onClick={resetState} variant="neon">
            Reset
          </ActionButton>
          <ActionButton onClick={() => gotoTab(activeTab + 1)} variant="grey">
            Continue
          </ActionButton>
        </CreatePostAction>
      </CreatePost>
    </CreatePostWrapper>
  );
}
