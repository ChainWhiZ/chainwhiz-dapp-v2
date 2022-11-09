import { BASIC_DETAILS } from 'data';
import { useState } from 'react';
import { BasicDetailsType } from 'types/post';
const MAX_LENGTH = 100;

export default function useBasicDetails() {
  // define the state for the different stages
  //   stage 1
  const [basicDetails, setBasicDetails] =
    useState<BasicDetailsType>(BASIC_DETAILS);

  /**
   * Use this function to check if the state has been completed
   * @param state
   * @returns {Boolean} returns true|false depending on the completion status of the state variables
   */
  const verifyState = (state: BasicDetailsType): boolean => {
    return Boolean(
      state.title &&
        state.categories &&
        state.referenceLink &&
        state.description &&
        +state.timeToComplete
    );
  };

  /**
   * This function will be triggered when an input element state changes
   * @param e The event object
   */
  const onStateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const name = e.target.name;
    const value = e.target.value;
    if (value.length < MAX_LENGTH) {
      setBasicDetails({ ...basicDetails, [name]: value });
    }
  };
  const isCompleted = verifyState(basicDetails);

  return {
    state: basicDetails,
    setState: setBasicDetails,
    onFormStateChange: onStateChange,
    isCompleted,
  };
}
