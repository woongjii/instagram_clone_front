import './App.css';
import Navbar from './component/Navbar.js';
import StoryPage from './component/StoryPage.js';
import Post from './component/Post';
import MainSide from './component/MainSide';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <div className='body'>
        <StoryPage />
        <Post />
        <MainSide />
      </div>
    </div>

  );
}

export default App;
