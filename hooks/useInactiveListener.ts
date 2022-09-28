import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { injected } from "utils";

export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React();

  useEffect(() => {

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { ethereum } = window as any;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        activate(injected);
      };

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
        }
      };
    }
  }, [active, error, suppress, activate]);
}
