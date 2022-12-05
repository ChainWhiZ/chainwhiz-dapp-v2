import RenderGroupImages from 'components/image/rendergroupedimage';
import RenderImage from 'components/image/renderimage';
import RenderStyledImage from 'components/image/renderstyledimage';
import { BountyBorder, BountyContent, BountyHeader, BountyMeta, BountyStatus, BountyText, BountyWrapper } from './bounty.styled';

export default function Bounty({ bounty }) {
    return (
        <BountyWrapper>
            <BountyContent>

                <BountyHeader>
                    <div>
                        <RenderStyledImage
                        src="/images/landing/polygon.svg"
                        className={"bounty__chain"}
                        />
                    </div>

                    <BountyStatus>
                        <div><RenderImage src="/images/explore/status.svg" alt='' /></div>

                        <span>Voting Active</span>
                    </BountyStatus>
                </BountyHeader>


                <BountyMeta>
                    <div>
                        <h4>{bounty.title}</h4>
                        <p>{bounty.description}</p>
                    </div>

                    <div>
                        <RenderGroupImages
                        images={bounty.userImages}
                        displayCount={4}
                        imageClassName={"bounty__meta__avatar"}
                        />
                    </div>
                </BountyMeta>

                <BountyBorder></BountyBorder>

                <BountyText>
                    <span>{bounty.daysLeft} days left</span>

                    <div>
                        <h4>{bounty.amount} matic</h4>
                        <p>$12 USD</p>
                    </div>
                </BountyText>
            </BountyContent>
        </BountyWrapper>
    )
}