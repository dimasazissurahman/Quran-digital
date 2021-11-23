import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailPage from './container/detail/Detail';
import HomePage from './container/home/Home';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/surat=:surat'} element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
