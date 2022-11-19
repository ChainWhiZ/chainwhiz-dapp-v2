import useBasicDetails from 'hooks/createpost/usebasicdetails';
import useBountyCriteria from 'hooks/createpost/usebountycriteria';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const { stage } = router.query;
  const [crumbs, setCrumbs] = useState(DEFAULT_BREAKCRUMBS);
  const [activeTab, setActiveTab] = useState(0);

  // basic details state
  const basicDetailsState = useBasicDetails();
  const { isCompleted: basicDetailsIsCompleted = false } = basicDetailsState;
  // bounty criteria state
  const bountyCriteriaState = useBountyCriteria();
  const { isCompleted: bountyCriteriaIsCompleted = false } =
    bountyCriteriaState;

  // tab filled state
  const tabsFilledStatus = [
    basicDetailsIsCompleted,
    bountyCriteriaIsCompleted,
    false,
    false,
  ];

  useEffect(() => {
    setCrumbs([...DEFAULT_BREAKCRUMBS, CREATE_POST_TABS[activeTab]]);
  }, [activeTab]);

  useEffect(() => {
    // validate they are frree
  }, [stage]);

  const proceed = () => {
    if (tabsFilledStatus[activeTab]) {
      setActiveTab((a) => a + 1);
    } else {
      // TODO notify that the form is incomplete
    }
  };

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
          />
        </CreatePostContent>

        <CreatePostAction>
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
