import React, { useEffect, useState } from 'react';
import {
  CreatePostWrapper,
  CreatePostTextContent,
  CreatePostBreadcrumb,
  CreatePostHeader,
  CreatePostContent,
  GoBackButton,
  CreatePost,
  CreatePostTabs,
  TabDesktop,
  TabMobile,
} from './post.styled';

const DEFAULT_BREAKCRUMBS = ['Home', 'Post a bounty'];
const CREATE_POST_TABS = [
  'Enter basic details',
  'Add bounty criterias',
  'Rewards & Voting',
  'Finish creating bounty',
];

export default function Post() {
  const [crumbs, setCrumbs] = useState(DEFAULT_BREAKCRUMBS);
  const [activeTab, setActiveTab] = useState(0);
  // define the state variables

  useEffect(() => {
    setCrumbs([...DEFAULT_BREAKCRUMBS, CREATE_POST_TABS[activeTab]]);
  }, [activeTab]);

  function getTabStatus(index: number) {
    return index < activeTab;
  }

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
              filled={getTabStatus(index)}
              onClick={() => setActiveTab(index)}
              key={oneTab}
            >
              <span>{oneTab}</span>
            </TabDesktop>
          ))}
          <TabMobile active>{CREATE_POST_TABS[activeTab]}</TabMobile>
        </CreatePostTabs>

        <CreatePostContent>
            {/* alternate between the different tabs here */}
        </CreatePostContent>
      </CreatePost>
    </CreatePostWrapper>
  );
}
