import RenderImage from 'components/image/renderimage';
import Link from 'next/link';
import {
  ErrorPageContent,
  ErrorPageWrapper,
  ErrorPageHeading,
  ErrorPageText,
  ErrorPageDescription,
  ErrorPageButton,
  ErrorImageWrapper,
} from './error.styled';

export default function ErrorPage() {
  return (
    <ErrorPageWrapper>
      <ErrorPageContent>
        <ErrorPageHeading>
          <ErrorImageWrapper>
            <RenderImage src="/images/error/error.png" alt="error" />
          </ErrorImageWrapper>
          <span>404</span>
        </ErrorPageHeading>

        <ErrorPageText>
          <span>Page not found</span>
        </ErrorPageText>

        <ErrorPageDescription>
          <span>
            The requested page seems to be unavailable at this moment. Please
            try checking if the link is correct or you may
          </span>
        </ErrorPageDescription>

        <ErrorPageButton>
          <Link href="/">Go back to home</Link>
        </ErrorPageButton>
      </ErrorPageContent>
    </ErrorPageWrapper>
  );
}
