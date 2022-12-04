import Alert from 'components/alerts';
import Modal from 'components/modals';
import Toast from 'components/toast';
import { useAlert } from 'contexts/alertcontext';
import { useToast } from 'contexts/toastcontext';
import React, { useState } from 'react';
import Banner from '../../components/banner';

export default function Segment1() {
  const { setAlert } = useAlert();

  return (
    <div>
      Segment1
      <button
        onClick={() => {
          setAlert({
            title: 'alex',
            subTitle: 'My name is alexander the great',
            size: 'small',
          });
        }}
      >
        open toast
      </button>
      <Modal
        title="success"
        subTitle="successfull subtitle"
        success={false}
        onClose={() => alert('closed')}
      />
    </div>
  );
}
