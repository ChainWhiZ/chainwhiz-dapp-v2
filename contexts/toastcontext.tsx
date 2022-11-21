import Toast from 'components/toast';
import { TOAST_DURATION } from 'constants/index';
import React, { useState, createContext, useContext, useRef } from 'react';

const DEFAULT_TOAST_VALUES = {
  title: '',
  subTitle: '',
  onAction: null,
};
type ToastValues = {
  title: string;
  subTitle: string;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  onAction?: any;
};

const ToastContext = createContext({
  setToast: (toastValues: ToastValues) => {
    console.log({ toastValues });
    return;
  },
});

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const TIMEOUT_REF = useRef<NodeJS.Timeout>();
  const [toastDetails, setToastDetails] = useState(DEFAULT_TOAST_VALUES);

  const resetToastState = () => {
    setOpen(false);
    setToastDetails({
      title: '',
      subTitle: '',
      onAction: null,
    });
    clearTimeout(TIMEOUT_REF.current);
  };

  const setToast = (toastValues: ToastValues) => {
    if (open) resetToastState();
    setOpen(true);
    // TODO use gsap to animate the toast(either fade in? or slide in?)
    const { title, subTitle, onAction } = toastValues;
    setToastDetails({
      title,
      subTitle,
      onAction,
    });
    TIMEOUT_REF.current = setTimeout(resetToastState, TOAST_DURATION);
  };

  return (
    <ToastContext.Provider value={{ setToast }}>
      <Toast
        show={open}
        title={toastDetails.title}
        subTitle={toastDetails.subTitle}
        closeToast={() => setOpen(false)}
      />
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };
