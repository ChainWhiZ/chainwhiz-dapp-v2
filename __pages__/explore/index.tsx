import Category from './segments/category';
import Header from './segments/header';
import Bounties from './segments/bounties';
import Footer from './segments/footer';
import { ExploreWrapper } from './explore.styled';


export default function ExplorePage() {
  //perform component level transformations and pass th eprops to the sample view

  return (
    <ExploreWrapper>
        <Header />
        <Category />
        <Bounties />
        <Footer />
    </ExploreWrapper>
  );
}