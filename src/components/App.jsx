import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Post from './OnePostPage/Post';
import Personal from './PersonalPage/Personal';
import Users from './UsersPage/Users';

function App() {

  return (

    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/Personal/:id" element={<Personal />} />
            <Route path='/Personal/:id/Posts/:id' element={<Post />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
