import './App.css';
import Blog from './components/Blog';
import SignUp from './components/Sign-up';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{backgroundColor: '#BCD2E8'}}>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
