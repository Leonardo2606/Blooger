import { MainBox, MainBoxTitle, MainBoxSubtitle, MainBoxButton } from './style';
import HeaderBlooger from './components/HeaderBlooger';
import BlogPostCarousel from './components/BlogPostCarousel';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <HeaderBlooger />
      <MainBox >
        <MainBoxSubtitle>
          Tour {`&`} Travels
        </MainBoxSubtitle>
        <MainBoxTitle>
          Amazing Place on Earth
        </MainBoxTitle>
        <MainBoxButton>Explore</MainBoxButton>
      </MainBox>
      <BlogPostCarousel />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
