import { BASIC_DETAILS } from 'data';

export type BasicDetailsType = typeof BASIC_DETAILS;

export type CreatePostHookType = {
  state: BasicDetailsType;
  setState: (oldValue: BasicDetailsType) => void;
  onFormStateChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isCompleted: boolean;
};

export type CreatePostTabType = {
  basicDetails: CreatePostHookType;
};
