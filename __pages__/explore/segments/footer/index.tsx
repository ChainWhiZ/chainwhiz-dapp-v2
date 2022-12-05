import RenderImage from 'components/image/renderimage';
import { FooterContent, FooterImage1, FooterImage2, FooterImage3, FooterSection1, FooterSection2, FooterWrapper } from './footer.styled';

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterSection1>
                    <FooterImage1>
                        <RenderImage src="/images/explore/doodle-6.png" alt="" />
                    </FooterImage1>
                    <FooterImage2>
                        <RenderImage src="/images/explore/Saly-35.png" alt="" />
                    </FooterImage2>
                    <FooterImage3>
                        <RenderImage src="/images/explore/doodle-7.png" alt="" />
                    </FooterImage3>
                </FooterSection1>

                <FooterSection2>
                    <span>Reached the very end? Let&apos;s take a journey to the centre of the world!</span>
                </FooterSection2>
            </FooterContent>
        </FooterWrapper>
    )
}