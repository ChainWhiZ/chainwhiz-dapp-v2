import React from 'react';
import Image from 'next/image';
import { CreatePostTabType } from 'types/post';
import {
  BasicDetailsWrapper,
  InputWrapper,
  CategoryImages,
} from './basicdetails.styled';

const CATEGORY__IMAGES = [
  '/images/post/coursecategory.svg',
  '/images/post/assesmentcategory.svg',
  '/images/post/channelcategory.svg',
];
export default function BasicDetailsTab({ basicDetails }: CreatePostTabType) {
  const { state, onFormStateChange } = basicDetails;

  return (
    <BasicDetailsWrapper>
      <InputWrapper>
        <section>
          <label>Bounty Title*</label>
          <span>Maximum characters {state.title.length} out of 100</span>
        </section>
        <input
          placeholder="For e.g. Coding quest, Hacking mania ..."
          type="text"
          name="title"
          value={state.title}
          onChange={onFormStateChange}
        />
      </InputWrapper>

      <InputWrapper>
        <section>
          <label>Bounty Category*</label>
          <span>You can add up to 3 categories</span>
        </section>
        <input
          placeholder="For e.g. Design, Course etc."
          type="text"
          name="categories"
          value={state.categories}
          onChange={onFormStateChange}
        />
        <CategoryImages>
          {CATEGORY__IMAGES.map((ca, index) => (
            <div key={index}>
              <Image src={ca} layout="fill" alt="Category image" />
            </div>
          ))}
        </CategoryImages>
      </InputWrapper>

      <InputWrapper>
        <section>
          <label>Reference URL Link*</label>
          <span>URL link cannot be empty!</span>
        </section>
        <input
          placeholder="Please include valid URL links"
          type="text"
          name="referenceLink"
          value={state.referenceLink}
          onChange={onFormStateChange}
        />
      </InputWrapper>

      <InputWrapper>
        <section>
          <label>Bounty Description*</label>
          <span>Maximum characters {state.description.length} out of 500</span>
        </section>
        <textarea
          placeholder="Describe your bounty in details for better understanding ..."
          name="description"
          value={state.description}
          onChange={onFormStateChange}
        />
      </InputWrapper>

      <InputWrapper>
        <section>
          <label>Time to complete Bounty*</label>
          <span>Enter no. of days only</span>
        </section>
        <input
          placeholder="For e.g. 6 Days*"
          type="number"
          name="timeToComplete"
          value={state.timeToComplete}
          onChange={onFormStateChange}
        />
      </InputWrapper>
    </BasicDetailsWrapper>
  );
}
