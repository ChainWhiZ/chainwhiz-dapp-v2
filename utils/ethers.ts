import { InjectedConnector } from '@web3-react/injected-connector';
import { PRODUCTION_CHAIN, STAGING_CHAIN } from 'constants';
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