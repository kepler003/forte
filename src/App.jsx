import './App.css';
import { Routes, Route } from 'react-router-dom';
import EditIntern from './components/pages/EditIntern/EditIntern';
import InternList from './components/pages/InternList/InternList';
import Header from './components/layout/Header/Header';

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
