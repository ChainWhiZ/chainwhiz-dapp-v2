import { InjectedConnector } from '@web3-react/injected-connector';
import { PRODUCTION_CHAIN, STAGING_CHAIN } from 'constants/index';
import { ethers } from 'ethers';
import { IS_DEV } from './utilities';

/**
 * A variable returning the chains which are supported for thsi environment
 */
export const SUPPORTED_CHAIN_IDS = [IS_DEV ? STAGING_CHAIN : PRODUCTION_CHAIN];

/**
 * A utility function which is used to return a provider instance for the web3 library
 * @param provider an instance of a web3 provider
 *
 * @returns a provider instance to be used throughout the application
 */
export function getLibrary(
  provider:
    | ethers.providers.ExternalProvider
    | ethers.providers.JsonRpcFetchFunc
): ethers.providers.Provider {
  const gottenProvider = new ethers.providers.Web3Provider(provider, 'any');
  return gottenProvider;
}

/**
 * A variable holding the value for the metamask connector
 */
export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});

/**
 * A function used to format an ethereum address into a shorter form
 * displaying the first n characters of the address and the last n characters
 *
 * @param address the string representation of the address we wish to shorten
 * @param {displayCount}  the number of characters we wish to display on each end
 * @returns
 */
export const formatAddress = (
  address: string,
  { displayCount = 5 }: { displayCount?: number } = {}
) => {
  const addressLen = address.length;
  const prefix = address.slice(0, displayCount);
  const suffix = address.slice(addressLen - displayCount, addressLen);

  return `${prefix}...${suffix}`;
};
