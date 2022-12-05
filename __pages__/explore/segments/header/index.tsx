import RenderImage from 'components/image/renderimage';
import { HeaderContent, HeaderDescription, HeaderFilter, HeaderSearch, HeaderSearchBar, HeaderSection1, HeaderSection2, HeaderTitle, HeaderWrapper } from './header.styled';

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <HeaderSection1>
                    <HeaderTitle>
                        <h1>Explore Bounties</h1>

                        <div>
                            <button>
                                <span>Active</span>
                                <div>
                                    <RenderImage src="/images/explore/menu.svg" alt="" />
                                </div>
                            </button>
                        </div>
                    </HeaderTitle>

                    <HeaderDescription>Immerse yourself into the world of <span>bounties</span></HeaderDescription>
                </HeaderSection1>

                <HeaderSection2>
                    <HeaderSearch>

                        <form>
                            <button>
                                <div><RenderImage src="/images/explore/search.svg" alt="" /></div>
                            </button>
                            <HeaderSearchBar type="text" placeholder="Search your favorite bounties" />
                        </form>
                    </HeaderSearch>

                    <HeaderFilter>
                        <div>
                            <div><RenderImage src="/images/explore/filter.svg" alt="" /></div>
                            <span></span>
                        </div>
                    </HeaderFilter>
                </HeaderSection2>
            </HeaderContent>
        </HeaderWrapper>
    )
}