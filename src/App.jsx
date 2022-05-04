import './App.css';
import { Routes, Route } from 'react-router-dom';
import EditIntern from './EditIntern';
import InternList from './InternList';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main>
        <Routes>
          <Route path='/interns/:id' exact element={<EditIntern />} />
          <Route path='/' element={<InternList />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
