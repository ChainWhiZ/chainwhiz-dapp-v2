import Alert from 'components/alerts';
import Toast from 'components/toast';
import { useToast } from 'contexts/toastcontext';
import React, { useState } from 'react';
import Banner from '../../components/banner';

export default function Segment1() {
  const [s, sets] = useState(true);
  const { setToast } = useToast();

  return (
    <div>
      Segment1
      <button
        onClick={() => {
          setToast({
            title: 'alex',
            subTitle: 'My name is alexander the great',
          });
        }}
      >
        open toast
      </button>
      <button>open alert</button>
      <Alert
        show
        title="title"
        size="large"
        subTitle="i am a subtitle"
        closeToast={() => alert('working')}
      />
    </div>
  );
}
