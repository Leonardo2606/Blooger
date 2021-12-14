import './App.css';
import { MainBox, MainBoxTitle, MainBoxSubtitle, MainBoxButton } from './style';
import HeaderBlooger from './components/HeaderBlooger';
import BlogPost from './components/BlogPosts';
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
      <BlogPost />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
