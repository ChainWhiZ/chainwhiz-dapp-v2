import Alert from 'components/alerts';
import { TOAST_DURATION } from 'constants/index';
import React, { useState, createContext, useContext, useRef } from 'react';

type AlertValues = {
  title: string;
  subTitle: string;
  size: 'small' | 'large';
};

const DEFAULT_ALERT_VALUES: AlertValues = {
  title: '',
  subTitle: '',
  size: 'small',
};

const AlertContext = createContext({
  setAlert: (alertValues: AlertValues) => {
    console.log({ alertValues });
    return;
  },
});

const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const TIMEOUT_REF = useRef<NodeJS.Timeout>();
  const [alertDetails, setAlertDetails] = useState(DEFAULT_ALERT_VALUES);

  const resetAlertState = () => {
    setOpen(false);
    setAlertDetails({
      title: '',
      subTitle: '',
      size: 'small',
    });
    clearTimeout(TIMEOUT_REF.current);
  };

  const setAlert = (toastValues: AlertValues) => {
    if (open) resetAlertState();
    setOpen(true);
    // TODO use gsap to animate the toast(either fade in? or slide in?)
    const { title, subTitle, size } = toastValues;
    setAlertDetails({
      title,
      subTitle,
      size,
    });
    TIMEOUT_REF.current = setTimeout(resetAlertState, TOAST_DURATION);
  };

  return (
    <AlertContext.Provider value={{ setAlert }}>
      <Alert
        show={open}
        title={alertDetails.title}
        subTitle={alertDetails.subTitle}
        size={alertDetails.size}
        closeToast={() => setOpen(false)}
      />
      {children}
    </AlertContext.Provider>
  );
};

const useAlert = () => useContext(AlertContext);

export { useAlert, AlertProvider };
