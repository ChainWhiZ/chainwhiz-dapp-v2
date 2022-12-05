import { BOUNTIES } from 'data';
import Bounty from '__pages__/explore/components/bounty';
import { BountiesContent, BountiesWrapper } from './bounties.styled';

export default function Bounties() {
    return (
        <BountiesWrapper>
            <BountiesContent>
                {BOUNTIES.slice(0,6).map((bounty, index) => (
                    <Bounty bounty={bounty} key={index} />
                ))}
            </BountiesContent>
        </BountiesWrapper>
    )
}