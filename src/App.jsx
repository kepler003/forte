import './App.css';
import { Routes, Route } from 'react-router-dom';
import EditIntern from './components/EditIntern/EditIntern';
import InternList from './components/InternList/InternList';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/interns/:id' exact element={<EditIntern />} />
          <Route path='/' element={<InternList />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
