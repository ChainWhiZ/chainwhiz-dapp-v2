import React from 'react';
import { useRouter } from 'next/router';
import {
  BountyTitle,
  HackingWrapper,
  GoBackButton,
  BountyCategories,
  Overview,
  ReferenceWrapper,
  EvaluationWrapper,
  EvaluationCriteria,
  EvaluationCriteriaWrapper,
  OverviewTab,
  OverviewTitle,
  OverviewValue,
  Reference,
  ReferenceHeader,
  ReferenceURL,
  ReferenceText,
} from './bountydetails.styled';
import { openNewWindow } from 'utils';
import { DEFAULT_CHECKBOX_PROPS, EVALUATION_CRITERIA } from 'data/evaluation';
import Checkbox from 'components/checkbox';
import RenderStyledImage from 'components/image/renderstyledimage';

export default function Details() {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <HackingWrapper>
      <GoBackButton onClick={goBack}>Back</GoBackButton>
      <BountyTitle>Hacking Challenge Mania</BountyTitle>
      <BountyCategories>
        {['Ethical Hacking', 'Zeplin engine'].map((category, index) => (
          <div key={index}>{category}</div>
        ))}
      </BountyCategories>

      <Overview>
        <OverviewTab>
          <OverviewValue>6</OverviewValue>
          <OverviewTitle>Prices</OverviewTitle>
        </OverviewTab>
        <OverviewTab>
          <OverviewValue>10 Days</OverviewValue>
          <OverviewTitle>Deadline</OverviewTitle>
        </OverviewTab>
        <OverviewTab>
          <OverviewValue>258</OverviewValue>
          <OverviewTitle>Contributions</OverviewTitle>
        </OverviewTab>
      </Overview>

      <ReferenceWrapper>
        <Reference>
          <ReferenceHeader>Reference URL</ReferenceHeader>
          <ReferenceURL onClick={() => openNewWindow('refrenceURL')}>
            <RenderStyledImage className='globe__image' src="/images/exportbounty/globe.png" />
            <p>https://www.ninjabrothers.com/rdp/admin-sys</p>
          </ReferenceURL>
          <ReferenceText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            odio ex, vehicula at venenatis in, ullamcorper non neque. Fusce ut
            efficitur libero. Phasellus tempus ex a gravida ullamcorper.
            Phasellus facilisis urna non leo tincidunt tempor. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </ReferenceText>
          <small>See more...</small>
        </Reference>
      </ReferenceWrapper>

      <EvaluationWrapper>
        <h4>Evaluation Criterias</h4>
        <EvaluationCriteriaWrapper>
          {EVALUATION_CRITERIA.map((ec: string, index: number) => (
            <EvaluationCriteria key={index}>
              <Checkbox {...DEFAULT_CHECKBOX_PROPS} />
              <p>{ec}</p>
            </EvaluationCriteria>
          ))}
        </EvaluationCriteriaWrapper>
      </EvaluationWrapper>
    </HackingWrapper>
  );
}
