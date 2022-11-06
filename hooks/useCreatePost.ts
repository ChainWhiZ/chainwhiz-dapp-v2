import { useState } from 'react';

export default function useCreatePost() {
  // define the state for the different stages
  //   stage 1
  const [basicDetails, setBasicDetails] = useState();

  return {
    basicDetails,
    setBasicDetails,
  };
}
